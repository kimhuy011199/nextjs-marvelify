import React from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/hooks/use-cart';
import Money from '@/components/money';

const CheckoutItemsList: React.FC = () => {
  const cart = useCart();

  return (
    <ul className="flex flex-col gap-3 mb-2">
      {cart.items.map((item) => (
        <li key={item.productVariantId} className="flex gap-5">
          <div className="border border-accent rounded-xl h-20 w-20 bg-white p-2 flex justify-center items-center">
            <div className="w-full max-w-8">
              <Image
                src={item.productVariant.previewImg}
                width={540}
                height={1040}
                alt={item.productVariant.name}
              />
            </div>
          </div>
          <div className="flex items-center w-full">
            <div className="flex flex-col mr-auto">
              <h3 className="text-lg font-medium">
                {item.productVariant.productName}
              </h3>
              <span className="text-accent-foreground text-sm">
                Variant: {item.productVariant.name}
              </span>
              <span className="text-accent-foreground text-sm">
                Quanity: {item.quantity}
              </span>
            </div>
            <div className="min-w-24 text-right">
              <Money
                amount={
                  item.productVariant.priceAfterDiscounted * item.quantity
                }
                originalAmount={item.productVariant.price * item.quantity}
                currency={item.productVariant.currency}
                className="justify-end flex-col gap-0"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CheckoutItemsList;
