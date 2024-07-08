'use client';

import React from 'react';
import CartEmpty from '@/components/cart/cart-empty';
import CartLines from '@/components/cart/cart-lines';
import CartSummary from '@/components/cart/cart-summary';
import NonSSRWrapper from '@/components/non-ssr-wrapper';
import { useCart } from '@/lib/hooks/use-cart';
import { AppStatus } from '@/lib/enums';
import Spinner from '@/components/spinner';

interface CartContainerProps {
  userId: string | undefined;
}

const CartContainer: React.FC<CartContainerProps> = ({ userId }) => {
  const cart = useCart();

  return (
    <NonSSRWrapper>
      {cart.status === AppStatus.Loading ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <Spinner />
          <span>Setting up your cart...</span>
        </div>
      ) : null}
      {(cart.status === AppStatus.Resolved ||
        cart.status === AppStatus.Updating) &&
      cart.items.length ? (
        <div className="flex flex-col lg:flex-row gap-12 items-stretch lg:items-start">
          <CartLines userId={userId} />
          <CartSummary />
        </div>
      ) : null}
      {cart.status === AppStatus.Resolved && !cart.items.length ? (
        <CartEmpty />
      ) : null}
    </NonSSRWrapper>
  );
};

export default CartContainer;
