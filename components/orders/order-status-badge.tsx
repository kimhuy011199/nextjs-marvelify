import React from 'react';
import { OrderStatusType } from '@/lib/types';
import { twMerge } from 'tailwind-merge';

interface OrderStatusBadgeProps {
  status: OrderStatusType;
}

const OrderStatusBadge: React.FC<OrderStatusBadgeProps> = ({ status }) => {
  return (
    <div
      className={twMerge(
        'px-2 py-1 font-medium rounded-full text-xs',
        status === OrderStatusType.Pending &&
          'text-purple-600 bg-purple-100 border border-purple-600',
        status === OrderStatusType.Processing &&
          'text-blue-600 bg-blue-100 border border-blue-600',
        status === OrderStatusType.Shipping &&
          'text-yellow-600 bg-yellow-100 border border-yellow-600',
        status === OrderStatusType.Delivered &&
          'text-green-600 bg-green-100 border border-green-600',
        status === OrderStatusType.Cancelled &&
          'text-red-600 bg-red-100 border border-red-600'
      )}
    >
      {status}
    </div>
  );
};

export default OrderStatusBadge;
