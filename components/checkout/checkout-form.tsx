'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { CHECKOUT_STEPS } from '@/lib/constants';
import CheckoutFormSummary from '@/components/checkout/checkout-form-summary';
import CheckoutFormDelivery from '@/components/checkout/checkout-form-delivery';
import CheckoutFormAddress from '@/components/checkout/checkout-form-address';
import { useCheckout } from '@/lib/hooks/use-checkout';

const CheckoutForm: React.FC = () => {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || CHECKOUT_STEPS.ADDRESS;
  const checkoutState = useCheckout();
  console.log('checkoutState', checkoutState);

  const renderCheckoutStep = () => {
    switch (currentStep) {
      case CHECKOUT_STEPS.ADDRESS:
        return <CheckoutFormAddress />;
      case CHECKOUT_STEPS.DELIVERY:
        return <CheckoutFormDelivery />;
      case CHECKOUT_STEPS.PAYMENT:
        return null;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* <CheckoutFormSummary cart={cart} /> */}
      {renderCheckoutStep()}
    </div>
  );
};

export default CheckoutForm;
