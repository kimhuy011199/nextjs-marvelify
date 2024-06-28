'use client';

import React from 'react';
import CartEmpty from '@/components/cart/cart-empty';
import CartLines from '@/components/cart/cart-lines';
import CartSummary from '@/components/cart/cart-summary';
import NonSSRWrapper from '@/components/non-ssr-wrapper';
import { useCart } from '@/lib/hooks/use-cart';

interface CartContainerProps {
  userId: string | undefined;
}

const CartContainer: React.FC<CartContainerProps> = ({ userId }) => {
  const cart = useCart();

  return (
    <NonSSRWrapper>
      {cart.items.length ? (
        <div className="flex flex-col lg:flex-row gap-12 items-stretch lg:items-start">
          <CartLines userId={userId} />
          <CartSummary />
        </div>
      ) : (
        <CartEmpty />
      )}
    </NonSSRWrapper>
  );
};

export default CartContainer;
