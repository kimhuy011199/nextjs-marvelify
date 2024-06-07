import React from 'react';
import { OrderType } from '@/lib/types';

interface OrderDeliveryProps {
  order: OrderType;
}

const OrderDelivery: React.FC<OrderDeliveryProps> = ({ order }) => {
  const { shippingAddress, email, deliveryMethod } = order;
  const addressName = `${shippingAddress.firstName} ${shippingAddress.lastName}`;
  const { address1, address2, city, province, postalCode, country } =
    shippingAddress;
  const { name: deliveryMethodName } = deliveryMethod;

  return (
    <div className="border-t border-t-accent py-6">
      <h3 className="text-xl font-semibold mb-3">Delivery information</h3>
      <div className="grid grid-cols-3 gap-5">
        <div>
          <h3 className="text-lg font-medium pb-1">Contact</h3>
          <div className="text-accent-foreground">
            <p>{email}</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium pb-1">Delivery method</h3>
          <div className="text-accent-foreground">
            <p>{deliveryMethodName}</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium pb-1">Shipping address</h3>
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

export default OrderDelivery;
