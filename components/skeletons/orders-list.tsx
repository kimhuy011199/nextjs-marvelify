import React from 'react';

const OrdersListSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-200 rounded-lg h-[300px] w-full"
        />
      ))}
    </div>
  );
};

export default OrdersListSkeleton;
