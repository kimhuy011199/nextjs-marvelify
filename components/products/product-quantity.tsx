import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import ProductMaxQuantity from '@/components/products/product-max-quantity';
import { useCart } from '@/lib/hooks/use-cart';
import { AppStatus } from '@/lib/enums';

interface ProductQuantityProps {
  handleQuantityChange: (value: number) => void;
  quantity: number;
  limit?: number;
  className?: string;
  asTooltip?: boolean;
}

const PRODUCT_QUANTITY_LIMIT = 10;

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  handleQuantityChange,
  quantity,
  limit = PRODUCT_QUANTITY_LIMIT,
  className,
  asTooltip,
}) => {
  const cartState = useCart();

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
    <div className={twMerge('flex items-center gap-4', className)}>
      <div className="flex items-center gap-2 rounded-lg p-1.5 bg-white border border-accent">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={
            !limit || quantity === 1 || cartState.status === AppStatus.Updating
          }
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
          disabled={
            !limit ||
            quantity === limit ||
            cartState.status === AppStatus.Updating
          }
          className="p-1 transition-all hover:bg-muted rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
        >
          <Plus size={18} />
        </button>
      </div>
      {limit && quantity === limit ? (
        <ProductMaxQuantity asTooltip={asTooltip} />
      ) : null}
    </div>
  );
};

export default ProductQuantity;
