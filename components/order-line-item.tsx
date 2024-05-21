import React from 'react';
import Image from 'next/image';
import ProductPrice from '@/components/product-price';
import Link from 'next/link';

interface OrderLineItemProps {
  orderLineItem: any;
}

const OrderLineItem: React.FC<OrderLineItemProps> = ({ orderLineItem }) => {
  return (
    <div className="px-4 py-5 flex justify-between gap-3 w-full">
      <Link
        className="flex gap-4"
        href={`/products/${orderLineItem.productId}`}
      >
        <div className="min-w-28 max-w-28">
          <div className="w-1/2 max-w-20 mx-auto">
            <Image
              src={orderLineItem.previewImg}
              width={540}
              height={1040}
              alt={orderLineItem.name}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-lg pb-1">{orderLineItem.name}</h3>
          <p className="">
            <span className="text-muted-foreground">Variant: </span>
            <span className="font-medium">{orderLineItem.variant}</span>
          </p>
          <p className="">
            <span className="text-muted-foreground">Quantity: </span>
            <span className="font-medium">{orderLineItem.quantity}</span>
          </p>
        </div>
      </Link>
      <ProductPrice
        variant="md"
        price={orderLineItem.totalPrice}
        currency={orderLineItem.currency}
      />
    </div>
  );
};

export default OrderLineItem;
