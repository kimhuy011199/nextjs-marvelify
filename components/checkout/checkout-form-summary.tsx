import React from 'react';
import {
  CheckoutStepCard,
  CheckoutStepDescription,
  CheckoutStepHeading,
} from '@/components/checkout/checkout-step';

interface CheckoutFormSummaryProps {
  cart: any;
}

const CheckoutFormSummary: React.FC<CheckoutFormSummaryProps> = ({ cart }) => {
  const summary = [
    {
      label: 'Contact',
      value: cart.email,
    },
    {
      label: 'Ship to',
      value: `${cart.shippingAddress.address}, ${cart.shippingAddress.city}, ${cart.shippingAddress.country}`,
    },
    {
      label: 'Method',
      value: cart?.shippingMethod?.label,
    },
  ];

  return (
    <div className="flex flex-col gap-5 pb-8 mb-8 border-b border-accent">
      <CheckoutStepCard>
        <CheckoutStepHeading>Contact email</CheckoutStepHeading>
        <CheckoutStepDescription>something@example.com</CheckoutStepDescription>
      </CheckoutStepCard>
      <CheckoutStepCard>
        <CheckoutStepHeading>Ship to</CheckoutStepHeading>
        <CheckoutStepDescription>
          123 Main Street, Otoka, Emino, Canada
        </CheckoutStepDescription>
      </CheckoutStepCard>
    </div>
  );

  return (
    <div className="border border-accent rounded-xl bg-white mb-10">
      <ul className="px-4 py-1 flex flex-col divide-y divide-accent">
        {summary.map((item, index) => (
          <li key={index}>
            <div className="flex text-sm py-2">
              <span className="min-w-24 text-gray-600">{item.label}</span>
              <span>{item.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckoutFormSummary;
