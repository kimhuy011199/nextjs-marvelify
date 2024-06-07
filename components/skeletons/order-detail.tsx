import React from 'react';

const OrderDetailSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="animate-pulse bg-gray-200 rounded-lg h-10 w-40" />
      <div className="animate-pulse bg-gray-200 rounded-lg h-8" />
      <div className="animate-pulse bg-gray-200 rounded-lg h-[150px]" />
      <div className="animate-pulse bg-gray-200 rounded-lg h-[150px]" />
    </div>
  );
};

export default OrderDetailSkeleton;
