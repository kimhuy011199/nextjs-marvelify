import React from 'react';
import { OrderType } from '@/lib/types';

interface OrderPaymentProps {
  order: OrderType;
}

const OrderPayment: React.FC<OrderPaymentProps> = ({ order }) => {
  const { billingAddress, paymentMethod } = order;
  const addressName = `${billingAddress.firstName} ${billingAddress.lastName}`;
  const { address1, address2, city, province, postalCode, country } =
    billingAddress;

  return (
    <div className="border-t border-t-accent py-6">
      <h3 className="text-xl font-semibold mb-3">Payment information</h3>
      <div className="grid grid-cols-3 gap-5">
        <div>
          <h3 className="text-lg font-medium pb-1">Payment method</h3>
          <div className="text-accent-foreground">
            <p>{paymentMethod.name}</p>
            <p>{paymentMethod.description}</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium pb-1">Billing address</h3>
          <div className="text-accent-foreground">
            <p>{addressName}</p>
            <p>
              {address1}
              {address2 && <span>, {address2}</span>}
            </p>
            <p>
              {city}, {province} {postalCode}, {country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
