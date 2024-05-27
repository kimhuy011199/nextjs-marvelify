'use client';

import React from 'react';
import CartLineItem from '@/components/cart/cart-line-item';
import CartLinesHeader from '@/components/cart/cart-lines-header';
import { useCart } from '@/lib/hooks/use-cart';

const CartLines: React.FC = () => {
  const cart = useCart();

  return (
    <div className="w-full">
      <h1 className="title">Cart</h1>
      <div className="mt-5">
        <CartLinesHeader />
        <ul className="flex flex-col gap-4">
          {cart.items.map((item) => (
            <li key={item.productVariantId}>
              <CartLineItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartLines;
