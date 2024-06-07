import React from 'react';
import { getOrders } from '@/lib/data/orders';
import OrdersList from '@/components/orders/orders-list';
import OrdersEmpty from '@/components/orders/orders-empty';

const ListOrders: React.FC = async () => {
  const orders = await getOrders();

  return (
    <>{!orders.length ? <OrdersEmpty /> : <OrdersList orders={orders} />}</>
  );
};

export default ListOrders;
