import React from 'react';
import CartLineItem from '@/components/cart-line-item';
import CartLinesHeader from '@/components/cart-lines-header';

interface CartLinesProps {
  cart: {
    items: {
      id: string;
      name: string;
      price: number;
      currency: string;
      quantity: number;
      previewImg: string;
      variant: string;
    }[];
  };
}

const CartLines: React.FC<CartLinesProps> = ({ cart }) => {
  return (
    <div className="w-full">
      <h1 className="title">Cart</h1>
      <div className="mt-5">
        <CartLinesHeader />
        <ul className="flex flex-col gap-4">
          {cart.items.map((item) => (
            <li key={item.id}>
              <CartLineItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartLines;
