import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ProductsListSkeletonProps {
  className?: string;
  itemEachRow?: number;
  rows?: number;
}

const ProductsListSkeleton: React.FC<ProductsListSkeletonProps> = ({
  className,
  itemEachRow = 4,
  rows = 1,
}) => {
  return (
    <div className={twMerge('grid grid-cols-4 gap-3', className)}>
      {[...Array(itemEachRow * rows)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-200 rounded-lg h-[360px] lg:h-[430px] w-full"
        />
      ))}
    </div>
  );
};

export default ProductsListSkeleton;
