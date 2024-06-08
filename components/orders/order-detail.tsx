import React from 'react';
import { getOrderById } from '@/lib/data/orders';
import OrderLineItem from '@/components/orders/order-line-item';
import OrderSummary from '@/components/orders/order-summary';
import OrderDelivery from '@/components/orders/order-info-delivery';
import OrderStatusBadge from '@/components/orders/order-status-badge';
import { formatOrderDate } from '@/lib/utils';

interface OrderDetailProps {
  id: string;
}

const OrderDetail: React.FC<OrderDetailProps> = async ({ id }) => {
  const order = await getOrderById(id);

  if (!order) {
    return <></>;
  }

  return (
    <>
      <h2 className="font-semibold text-2xl pb-1">Order #{order.id}</h2>
      <div className="grid grid-cols-2 mt-4 mb-8 items-center">
        <div className="flex gap-3 items-center">
          <span className="text-accent-foreground">Order status:</span>
          <OrderStatusBadge status={order.status} />
        </div>
        <div className="flex gap-3">
          <span className="text-accent-foreground">Order date:</span>
          <span className="font-medium">
            {formatOrderDate(order.orderDate)}
          </span>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row gap-12 mt-3">
          <ul className="w-full">
            {order.lineItems.map((lineItem) => (
              <OrderLineItem
                key={lineItem.productVariantId}
                orderLineItem={lineItem}
                size="sm"
              />
            ))}
          </ul>
          <div className="min-w-72">
            <OrderSummary order={order} />
          </div>
        </div>
        <div className="mt-8">
          <OrderDelivery order={order} />
        </div>
      </div>
    </>
  );
};

export default OrderDetail;