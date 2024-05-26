import React from 'react';
import { Minus, Plus, TriangleAlert } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface ProductQuantityProps {
  handleQuantityChange: (value: number) => void;
  quantity: number;
  limit?: number;
  className?: string;
}

const PRODUCT_QUANTITY_LIMIT = 10;

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  handleQuantityChange,
  quantity,
  limit = PRODUCT_QUANTITY_LIMIT,
  className,
}) => {
  const handleIncrement = () => {
    if (quantity === limit) {
      return;
    }
    handleQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      return;
    }
    handleQuantityChange(quantity - 1);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <div
        className={twMerge(
          'flex items-center gap-2 rounded-lg p-1.5 bg-white border border-accent',
          className
        )}
      >
        <button
          type="button"
          onClick={handleDecrement}
          disabled={!limit || quantity === 1}
          className="p-1 transition-all hover:bg-muted rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
        >
          <Minus size={18} />
        </button>
        <span className="flex font-semibold text-center w-8 justify-center">
          {quantity}
        </span>
        <button
          type="button"
          onClick={handleIncrement}
          disabled={!limit || quantity === limit}
          className="p-1 transition-all hover:bg-muted rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
        >
          <Plus size={18} />
        </button>
      </div>
      {limit && quantity === limit ? (
        <div className="flex items-center text-sm text-amber-500 gap-2">
          <TriangleAlert size={15} />
          <span>Max quantity reached</span>
        </div>
      ) : null}
    </div>
  );
};

export default ProductQuantity;
