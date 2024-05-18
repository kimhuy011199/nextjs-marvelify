import React from 'react';
import Divider from '@/components/divider';
import { Button } from '@/components/ui/button';

const CartSummary: React.FC = () => {
  return (
    <div className="min-w-72 p-5 border border-gray-200 shadow-sm rounded-2xl bg-white">
      <h2 className="text-lg font-medium mb-4">Cart Summary</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-semibold">$100.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-muted-foreground">Calculated later</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Discount</span>
          <span className="font-semibold">$00.00</span>
        </div>
        <Divider className="my-2" />
        <div className="flex justify-between">
          <span className="text-muted-foreground">Total</span>
          <span className="font-semibold">$100.00</span>
        </div>
      </div>
      <Button className="mt-4 w-full">Proceed to Checkout</Button>
    </div>
  );
};

export default CartSummary;
