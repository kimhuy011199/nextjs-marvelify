import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface ProductQuantityProps {
  handleQuantityChange: (value: number) => void;
  quantity: number;
  className?: string;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  handleQuantityChange,
  quantity,
  className,
}) => {
  const handleIncrement = () => {
    handleQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      return;
    }
    handleQuantityChange(quantity - 1);
  };

  return (
    <div
      className={twMerge(
        'flex items-center gap-2 rounded-lg p-1.5 bg-gray-200',
        className
      )}
    >
      <button
        type="button"
        onClick={handleDecrement}
        className="p-1 transition-all hover:bg-gray-300 rounded-md"
      >
        <Minus size={18} />
      </button>
      <span className="flex font-semibold text-center w-8 justify-center">
        {quantity}
      </span>
      <button
        type="button"
        onClick={handleIncrement}
        className="p-1 transition-all hover:bg-gray-300 rounded-md"
      >
        <Plus size={18} />
      </button>
    </div>
  );
};

export default ProductQuantity;
