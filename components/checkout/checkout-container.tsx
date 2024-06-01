'use client';

import React, { useEffect } from 'react';
import { useCart } from '@/lib/hooks/use-cart';
import NonSSRWrapper from '@/components/non-ssr-wrapper';
import CheckoutForm from '@/components/checkout/checkout-form';
import CheckoutSummary from '@/components/checkout/checkout-summary';
import { useCheckout } from '@/lib/hooks/use-checkout';

const CheckoutContainer: React.FC = () => {
  const cart = useCart();
  const checkoutState = useCheckout();

  useEffect(() => {
    checkoutState.setCartItems(cart.items);
    checkoutState.calculateSubTotal();
    checkoutState.calculateTotal();
    checkoutState.clearDiscount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.items]);

  if (!cart.items.length) {
    return null;
  }

  return (
    <NonSSRWrapper>
      <div className="pr-12 py-12">
        <CheckoutForm />
      </div>
      <div className="pl-12 py-12 border-l border-l-accent">
        <CheckoutSummary />
      </div>
    </NonSSRWrapper>
  );
};

export default CheckoutContainer;
