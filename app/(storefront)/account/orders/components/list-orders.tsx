import React from 'react';
import { getOrdersByUserId } from '@/lib/data/orders';
import OrdersList from '@/components/orders/orders-list';
import OrdersEmpty from '@/components/orders/orders-empty';

interface ListOrdersProps {
  userId: string;
}

const ListOrders: React.FC<ListOrdersProps> = async ({ userId }) => {
  const orders = await getOrdersByUserId(userId);

  return (
    <>{!orders.length ? <OrdersEmpty /> : <OrdersList orders={orders} />}</>
  );
};

export default ListOrders;
