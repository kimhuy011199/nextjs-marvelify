import React from 'react';
import { TriangleAlert } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const TOOLTIP_DELAY_DURATION = 100;

interface ProductMaxQuantityProps {
  asTooltip?: boolean;
}

const ProductMaxQuantity: React.FC<ProductMaxQuantityProps> = ({
  asTooltip,
}) => {
  if (asTooltip) {
    return (
      <TooltipProvider delayDuration={TOOLTIP_DELAY_DURATION}>
        <Tooltip>
          <TooltipTrigger>
            <div className="text-amber-500">
              <TriangleAlert size={15} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <span className="text-sm text-amber-500">Max quantity reached</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className="flex items-center text-sm text-amber-500 gap-2">
      <TriangleAlert size={15} />
      <span>Max quantity reached</span>
    </div>
  );
};

export default ProductMaxQuantity;
