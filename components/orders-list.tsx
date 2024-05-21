import React from 'react';
import OrderItem from '@/components/order-item';

interface OrdersListProps {
  orders: any[];
}

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
  return (
    <div className="">
      <ul className="flex flex-col gap-4">
        {orders.map((order) => (
          <li key={order.id}>
            <OrderItem order={order} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersList;
