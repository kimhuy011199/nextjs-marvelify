'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductQuantity from '@/components/product-quantity';
import ProductPrice from '@/components/product-price';

interface CartLineItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    currency: string;
    quantity: number;
    previewImg: string;
    variant: string;
  };
}

const CartLineItem: React.FC<CartLineItemProps> = ({ item }) => {
  const { name, price, quantity, previewImg, variant } = item;

  return (
    <div className="flex gap-5 ">
      <div className="border border-gray-200 shadow-sm rounded-xl h-20 w-20 bg-white p-2 flex justify-center items-center">
        <div className="w-full max-w-8">
          <Image src={previewImg} width={540} height={1040} alt={name} />
        </div>
      </div>
      <div className="flex items-center w-full">
        <Link href={`/products/${item.id}`} className="flex flex-col mr-auto">
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="text-muted-foreground">Variant: {variant}</span>
        </Link>
        <ProductQuantity quantity={quantity} handleQuantityChange={() => {}} />
        <div className="min-w-24 text-right">
          <ProductPrice price={price} currency={item.currency} />
        </div>
        <div className="min-w-24 text-right">
          <ProductPrice price={price * quantity} currency={item.currency} />
        </div>
      </div>
    </div>
  );
};

export default CartLineItem;
