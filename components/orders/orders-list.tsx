import React from 'react';
import OrderItem, { OrderItemType } from '@/components/orders/order-item';

interface OrdersListProps {
  orders: OrderItemType[];
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
