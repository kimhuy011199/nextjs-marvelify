import React from 'react';

const CartEmpty: React.FC = () => {
  return (
    <div>
      <h1 className="title text-center mb-10">Cart</h1>
      <div className="flex flex-col items-center">
        <p className="text-lg text-gray-500 mb-5">Your cart is empty.</p>
        <a href="/" className="text-lg text-blue-500 hover:underline">
          Continue shopping
        </a>
      </div>
    </div>
  );
};

export default CartEmpty;
