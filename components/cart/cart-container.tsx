'use client';

import React from 'react';
import CartEmpty from '@/components/cart/cart-empty';
import CartLines from '@/components/cart/cart-lines';
import CartSummary from '@/components/cart/cart-summary';
import NonSSRWrapper from '@/components/non-ssr-wrapper';
import { useCart } from '@/lib/hooks/use-cart';

const CartContainer: React.FC = () => {
  const cart = useCart();

  return (
    <NonSSRWrapper>
      {cart.items.length ? (
        <div className="flex gap-12 items-start">
          <CartLines />
          <CartSummary />
        </div>
      ) : (
        <CartEmpty />
      )}
    </NonSSRWrapper>
  );
};

export default CartContainer;