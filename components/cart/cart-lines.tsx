'use client';

import React from 'react';
import CartLineItem from '@/components/cart/cart-line-item';
import CartLinesHeader from '@/components/cart/cart-lines-header';
import { useCart } from '@/lib/hooks/use-cart';
import CartRecommendLogin from '@/components/cart/cart-recommend-login';

interface CartLinesProps {
  userId: string | undefined;
}

const CartLines: React.FC<CartLinesProps> = ({ userId }) => {
  const cart = useCart();

  return (
    <div className="w-full">
      <h1 className="title">Cart</h1>
      {!userId ? <CartRecommendLogin /> : null}
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
