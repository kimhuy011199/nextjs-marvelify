import React from 'react';
import { ShoppingBag } from 'lucide-react';
import ArrowLink from '@/components/arrow-link';

const OrdersEmpty: React.FC = () => {
  return (
    <div className="py-10 flex flex-col gap-2 w-full items-center justify-center">
      <div className="mb-4">
        <ShoppingBag size={80} strokeWidth="1" />
      </div>
      <p className="text-lg text-gray-500 mb-3">
        You don&apos;t have any orders yet!
      </p>
      <ArrowLink label="Continue shopping" />
    </div>
  );
};

export default OrdersEmpty;
