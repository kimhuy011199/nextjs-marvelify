'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductQuantity from '@/components/products/product-quantity';
import { Button } from '@/components/ui/button';
import Money from '@/components/money';
import { CartLineItemType } from '@/lib/types';
import { Trash2 } from 'lucide-react';
import { useCart } from '@/lib/hooks/use-cart';
import { ROUTES } from '@/lib/constants';

interface CartLineItemProps {
  item: CartLineItemType;
}

const CartLineItem: React.FC<CartLineItemProps> = ({ item }) => {
  const cart = useCart();
  const { productVariant, quantity } = item;
  const {
    previewImg,
    name,
    productHandle,
    productName,
    currency,
    priceAfterDiscounted,
    price,
    id,
    availableQuantity,
  } = productVariant;
  const productHref = `${ROUTES.PRODUCT}/${productHandle}`;

  const handleDeleteItem = () => {
    cart.removeItem(id);
  };

  const handleQuantityChange = (value: number) => {
    cart.changeQuantityItem(id, value);
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
            amount={priceAfterDiscounted}
            currency={currency}
            originalAmount={price}
            className="flex-col items-end gap-0"
          />
        </div>
        <div className="min-w-24 text-right">
          <Money
            amount={priceAfterDiscounted * quantity}
            currency={currency}
            className="justify-end"
          />
        </div>
      </div>
    </div>
  );
};

export default CartLineItem;
