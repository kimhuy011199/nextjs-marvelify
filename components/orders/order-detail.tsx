import React from 'react';
import { getOrderById } from '@/lib/data/orders';
import OrderLineItem from '@/components/orders/order-line-item';
import OrderSummary from '@/components/orders/order-summary';
import OrderDelivery from '@/components/orders/order-info-delivery';
import OrderPayment from '@/components/orders/order-info-payment';
import OrderStatusBadge from '@/components/orders/order-status-badge';
import { formatOrderDate, formatOrderNumber } from '@/lib/utils';
import Divider from '@/components/divider';
import { OrderStatusType, OrderType } from '@/lib/types';

interface OrderDetailProps {
  id: string;
}

const OrderDetail: React.FC<OrderDetailProps> = async ({ id }) => {
  const order = (await getOrderById(id)) as OrderType;
  console.log('order', order);

  if (!order) {
    return <></>;
  }

  return (
    <>
      <h2 className="font-semibold text-2xl pb-1">
        Order {formatOrderNumber(order.orderNumber)}
      </h2>
      <div className="grid grid-cols-2 mt-4 items-center">
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
      <Divider className="my-8" />
      <div>
        <div className="flex flex-col lg:flex-row gap-12 mt-4">
          <ul className="w-full">
            {order.cart.items.map((lineItem) => (
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
        <div className="mt-4">
          <OrderPayment order={order} />
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
