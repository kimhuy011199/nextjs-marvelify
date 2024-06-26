import React from 'react';
import Link from 'next/link';
import { ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OrderLineItem from '@/components/orders/order-line-item';
import { OrderStatusType, OrderType } from '@/lib/types';
import Money from '@/components/money';
import OrderStatusBadge from '@/components/orders/order-status-badge';
import { formatOrderDate, formatOrderNumber } from '@/lib/utils';

export type OrderItemType = Omit<
  OrderType,
  'billingAddress' | 'shippingAddress' | 'paymentMethod' | 'discount'
>;

interface OrderItemProps {
  order: OrderItemType;
}

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  return (
    <div className="border border-accent rounded-2xl bg-white transition-all flex flex-col overflow-hidden">
      <div className="grid grid-cols-4 px-4 py-3 border-b bg-gray-50">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-accent-foreground">
            Order Number
          </span>
          <span className="font-medium">
            {formatOrderNumber(order.orderNumber)}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-accent-foreground">
            Ordered Date
          </span>
          <span className="font-medium">
            {formatOrderDate(order.orderDate)}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-accent-foreground">
            Total Price
          </span>
          <Money amount={order.total} currency={order.currency} />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium text-accent-foreground">
            Order Status
          </span>
          <OrderStatusBadge status={order.status as OrderStatusType} />
        </div>
      </div>
      {order?.deliveryMethod?.estimatedDelivery ? (
        <div className="flex items-center gap-2 px-4 pt-3">
          <Info size={16} className="text-blue-400" />
          <span className="text-sm font-medium text-accent-foreground">
            Estimated Delivery:
          </span>
          <span className="font-medium">
            {order?.deliveryMethod?.estimatedDelivery}
          </span>
        </div>
      ) : null}
      <OrderLineItem orderLineItem={order.cart.items[0]} />
      <div className="flex justify-between items-center px-5 pb-2">
        <div className="text-accent-foreground text-sm">
          {order.cart.items.length > 1 ? (
            <span>{order.cart.items.length - 1} more item(s)</span>
          ) : null}
        </div>
        <Button asChild variant="link" className="flex gap-1 pr-1">
          <Link href={`/account/orders/${order.id}`}>
            <span>View Order</span>
            <ArrowRight size={14} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrderItem;
