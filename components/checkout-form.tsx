'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { CHECKOUT_STEPS } from '@/lib/constants';
import CheckoutFormSummary from '@/components/checkout-form-summary';
import CheckoutFormDelivery from '@/components/checkout-form-delivery';

const CheckoutForm: React.FC = () => {
  const cart = {
    email: 'example@email.com',
    shippingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'US',
    },
    billingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'US',
    },
    shippingMethod: {
      label: 'Standard Shipping',
      value: 'standard',
    },
    paymentMethod: 'credit-card',
  };

  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || CHECKOUT_STEPS.ADDRESS;

  const renderCheckoutStep = () => {
    switch (currentStep) {
      case CHECKOUT_STEPS.ADDRESS:
        return null;
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
      <CheckoutFormSummary cart={cart} />
      {renderCheckoutStep()}
    </div>
  );
};

export default CheckoutForm;
