import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ArrowLink from '@/components/arrow-link';

const CartEmpty: React.FC = () => {
  return (
    <div>
      <h1 className="title text-center mb-10">Cart</h1>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <ShoppingCart size={80} strokeWidth="1" />
        </div>
        <p className="text-lg text-gray-500 mb-3">
          You don&apos;t have anything in your cart.
        </p>
        <ArrowLink label="Explore products" />
      </div>
    </div>
  );
};

export default CartEmpty;
