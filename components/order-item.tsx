import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductPrice from '@/components/product-price';
import OrderLineItem from '@/components/order-line-item';
import { ArrowRight, Info } from 'lucide-react';

interface OrderItemProps {
  order: any;
}

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  console.log('order', order);
  return (
    <div className="border border-accent rounded-2xl bg-white transition-all flex flex-col overflow-hidden">
      <div className="grid grid-cols-4 px-4 py-3 border-b bg-gray-50">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-accent-foreground">
            Order ID
          </span>
          <span className="font-medium">#{order.id}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-accent-foreground">
            Order Date
          </span>
          <span className="font-medium">{order.orderDate}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-accent-foreground">
            Status
          </span>
          <span className="font-medium">{order.status}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-accent-foreground">
            Total Price
          </span>
          <ProductPrice price={order.totalPrice} currency={order.currency} />
        </div>
      </div>
      {order?.estimatedDelivery ? (
        <div className="flex items-center gap-2 px-4 pt-3">
          <Info size={16} className="text-blue-400" />
          <span className="text-sm font-medium text-accent-foreground">
            Estimated Delivery:
          </span>
          <span className="font-medium">{order.estimatedDelivery}</span>
        </div>
      ) : null}
      <OrderLineItem orderLineItem={order.lineItems[0]} />
      <div className="flex justify-between items-center px-5 pb-2">
        <div className="text-accent-foreground text-sm">
          {order.lineItems.length > 1 ? (
            <span>{order.lineItems.length - 1} more item(s)</span>
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
