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
    // Initialize state
    checkoutState.clearDiscount();
    checkoutState.setCartItems(cart.items);
    checkoutState.calculateSubTotal();
    checkoutState.calculateTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.items]);

  if (!cart.items.length) {
    return null;
  }

  return (
    <NonSSRWrapper>
      <div className="px-12 lg:pl-0 py-8 lg:py-12">
        <CheckoutForm />
      </div>
      <div className="px-12 lg:pr-0 py-8 lg:py-12 lg:border-l lg:border-l-accent">
        <CheckoutSummary />
      </div>
    </NonSSRWrapper>
  );
};

export default CheckoutContainer;
