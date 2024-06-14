import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Money from '@/components/money';
import { CartLineItemType } from '@/lib/types';
import { twMerge } from 'tailwind-merge';

interface OrderLineItemProps {
  orderLineItem: CartLineItemType;
  size?: 'sm' | 'md';
}

const OrderLineItem: React.FC<OrderLineItemProps> = ({
  orderLineItem,
  size = 'md',
}) => {
  const { productVariant } = orderLineItem;

  return (
    <div
      className={twMerge(
        'px-4 py-5 flex justify-between gap-3 w-full',
        size === 'sm' ? 'px-0 py-2' : ''
      )}
    >
      <Link
        className="flex gap-4"
        href={`/products/${productVariant.productHandle}`}
      >
        <div
          className={twMerge(
            'min-w-28 max-w-2 bg-white',
            size === 'sm' ? 'p-3 rounded-xl border border-accent' : ''
          )}
        >
          <div className="w-1/2 max-w-20 mx-auto">
            <Image
              src={productVariant.previewImg}
              width={540}
              height={1040}
              alt={productVariant.name}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-lg pb-1">
            {productVariant.productName}
          </h3>
          <p className="">
            <span className="text-accent-foreground">Variant: </span>
            <span className="font-medium">{productVariant.name}</span>
          </p>
          <p className="">
            <span className="text-accent-foreground">Quantity: </span>
            <span className="font-medium">{orderLineItem.quantity}</span>
          </p>
        </div>
      </Link>
      <Money
        amount={productVariant.discountedPrice * orderLineItem.quantity}
        currency={productVariant.currency}
        originalAmount={productVariant.price * orderLineItem.quantity}
        className={size === 'sm' ? 'flex-col' : 'flex-row'}
      />
    </div>
  );
};

export default OrderLineItem;
