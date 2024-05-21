import React from 'react';

const OrdersEmpty: React.FC = () => {
  return (
    <div className="py-10 flex flex-col gap-6 w-full items-center justify-center">
      <p>You don&apos;t have any orders yet!</p>
    </div>
  );
};

export default OrdersEmpty;
