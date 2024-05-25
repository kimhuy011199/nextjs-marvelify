import React from 'react';

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
    <div className="border border-gray-200 rounded-xl bg-white mb-10">
      <ul className="px-4 py-1 flex flex-col divide-y divide-gray-200">
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
