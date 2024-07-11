'use client';

import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import ProductQuantity from '@/components/products/product-quantity';
import { Button } from '@/components/ui/button';
import Money from '@/components/money';
import { CartLineItemType } from '@/lib/types';
import { Trash2 } from 'lucide-react';
import { useCart } from '@/lib/hooks/use-cart';
import { API_ENDPOINTS, ROUTES } from '@/lib/constants';
import { AppStatus } from '@/lib/enums';
import { useToast } from '@/components/ui/use-toast';

interface CartLineItemProps {
  item: CartLineItemType;
}

const CartLineItem: React.FC<CartLineItemProps> = ({ item }) => {
  const cart = useCart();
  const { toast } = useToast();
  const { productVariant, quantity, id: cartLineItemId } = item;
  const {
    previewImg,
    name,
    productHandle,
    productName,
    currency,
    discountedPrice,
    price,
    id,
    availableQuantity,
  } = productVariant;
  const productHref = `${ROUTES.PRODUCT}/${productHandle}`;

  const handleDeleteItem = async () => {
    if (cart.status === AppStatus.Updating) {
      return;
    }

    try {
      cart.setStatus(AppStatus.Updating);
      if (cart?.cartId && cartLineItemId) {
        const endpoint = `${API_ENDPOINTS.LINES}/${cartLineItemId}`;
        await axios.delete(endpoint);
      }

      cart.removeItem(id);
    } catch (error) {
      cart.setStatus(AppStatus.Error);
      toast({
        title: 'Something went wrong',
        description: 'There was an error on our end. Please try again.',
        variant: 'destructive',
      });
      return;
    }
    cart.setStatus(AppStatus.Resolved);
  };

  const handleQuantityChange = async (value: number) => {
    if (cart.status === AppStatus.Updating) {
      return;
    }

    try {
      cart.setStatus(AppStatus.Updating);
      if (cart?.cartId && cartLineItemId) {
        const endpoint = `${API_ENDPOINTS.LINES}/${cartLineItemId}`;
        const data = {
          quantity: value,
          cartLineItemId,
        };
        await axios.put(endpoint, { data });
      }

      cart.changeQuantityItem(id, value);
    } catch (error) {
      cart.setStatus(AppStatus.Error);
      toast({
        title: 'Something went wrong',
        description: 'There was an error on our end. Please try again.',
        variant: 'destructive',
      });
      return;
    }
    cart.setStatus(AppStatus.Resolved);
  };

  return (
    <div className="flex gap-5">
      <Link
        href={productHref}
        className="border border-accent rounded-xl h-20 w-20 bg-white p-2 flex justify-center items-center"
      >
        <div className="w-full max-w-8">
          <Image src={previewImg} width={540} height={1040} alt={name} />
        </div>
      </Link>
      <div className="flex items-center w-full">
        <Link href={productHref} className="flex flex-col mr-auto">
          <h3 className="text-lg font-medium">{productName}</h3>
          <span className="text-accent-foreground">Variant: {name}</span>
        </Link>
        <Button
          onClick={handleDeleteItem}
          variant="ghost"
          className="mr-2 p-2 text-accent-foreground rounded-md hover:text-primary hover:bg-transparent"
          disabled={cart.status === AppStatus.Updating}
        >
          <Trash2 size={16} />
        </Button>
        <ProductQuantity
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
          limit={availableQuantity}
          className="min-w-36 gap-2"
          asTooltip
        />
        <div className="min-w-24 text-right">
          <Money
            amount={discountedPrice}
            currency={currency}
            originalAmount={price}
            className="flex-col items-end gap-0"
          />
        </div>
        <div className="min-w-24 text-right">
          <Money
            amount={discountedPrice * quantity}
            currency={currency}
            className="justify-end"
          />
        </div>
      </div>
    </div>
  );
};

export default CartLineItem;
