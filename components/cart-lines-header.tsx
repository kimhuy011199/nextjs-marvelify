import React from 'react';

const CartLinesHeader: React.FC = () => {
  return (
    <div className="pb-3 mb-5 flex w-full border-b border-gray-200 font-medium text-muted-foreground">
      <div className="ml-auto"></div>
      <span className="w-[112px] text-center">Quantity</span>
      <span className="w-24 text-right">Price</span>
      <span className="w-24 text-right">Total</span>
    </div>
  );
};

export default CartLinesHeader;
