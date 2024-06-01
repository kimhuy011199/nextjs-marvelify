'use client';

import React from 'react';
import {
  CheckoutStepCard,
  CheckoutStepDescription,
  CheckoutStepHeading,
} from '@/components/checkout/checkout-step';
import { useCheckout } from '@/lib/hooks/use-checkout';
import { CHECKOUT_STEPS } from '@/lib/constants';

interface CheckoutFormSummaryProps {
  checkoutStep: string;
}

const CheckoutFormSummary: React.FC<CheckoutFormSummaryProps> = ({
  checkoutStep,
}) => {
  const checkoutState = useCheckout();
  const { checkout } = checkoutState;
  const { email, shippingAddress, deliveryMethod } = checkout;
  const { address1, city, postalCode, country } = shippingAddress;

  const contactAddressValue = {
    label: 'Contact address',
    value: email,
  };

  const shippingAddressValue = {
    label: 'Shipping address',
    value: `${address1}, ${city}, ${postalCode}, ${country}`,
  };

  const deliveryMethodValue = {
    label: 'Delivery method',
    value: deliveryMethod?.name,
  };

  const renderSummary = () => {
    switch (checkoutStep) {
      case CHECKOUT_STEPS.DELIVERY:
        return [contactAddressValue, shippingAddressValue];
      case CHECKOUT_STEPS.PAYMENT:
        return [contactAddressValue, shippingAddressValue, deliveryMethodValue];
      default:
        return [];
    }
  };
  const summaryData = renderSummary();

  return (
    <>
      {summaryData.length ? (
        <div className="flex flex-col gap-5 pb-8 mb-8 border-b border-accent">
          {summaryData.map((item, index) => (
            <CheckoutStepCard key={index}>
              <CheckoutStepHeading>{item.label}</CheckoutStepHeading>
              <CheckoutStepDescription>{item.value}</CheckoutStepDescription>
            </CheckoutStepCard>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default CheckoutFormSummary;
