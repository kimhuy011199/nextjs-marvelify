'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { CHECKOUT_STEPS } from '@/lib/constants';
import CheckoutFormSummary from '@/components/checkout/checkout-form-summary';
import CheckoutFormDelivery from '@/components/checkout/checkout-form-delivery';
import CheckoutFormAddress from '@/components/checkout/checkout-form-address';
import CheckoutFormPayment from '@/components/checkout/checkout-form-payment';
import { useCheckout } from '@/lib/hooks/use-checkout';
import { getCheckoutStep } from '@/lib/utils';
import { AddressType } from '@/lib/types';

interface CheckoutFormProps {
  email?: string;
  addresses?: AddressType[];
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ email, addresses }) => {
  const checkoutState = useCheckout();
  const searchParams = useSearchParams();
  const paramStep = searchParams.get('step') || CHECKOUT_STEPS.ADDRESS;
  const checkoutStep = getCheckoutStep(checkoutState.checkout, paramStep);

  const renderCheckoutStep = () => {
    switch (checkoutStep) {
      case CHECKOUT_STEPS.ADDRESS:
        return <CheckoutFormAddress email={email} addresses={addresses} />;
      case CHECKOUT_STEPS.DELIVERY:
        return <CheckoutFormDelivery />;
      case CHECKOUT_STEPS.PAYMENT:
        return <CheckoutFormPayment />;
      default:
        return null;
    }
  };

  return (
    <div>
      <CheckoutFormSummary checkoutStep={checkoutStep} />
      {renderCheckoutStep()}
    </div>
  );
};

export default CheckoutForm;
