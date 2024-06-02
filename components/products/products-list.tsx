import React from 'react';
import ProductCard from '@/components/products/product-card';
import { ProductType } from '@/lib/types';
import { twMerge } from 'tailwind-merge';

interface ProductListProps {
  products: ProductType[];
  className?: string;
}

const ProductsList: React.FC<ProductListProps> = ({ products, className }) => {
  return (
    <ul className={twMerge('grid grid-cols-4 gap-3', className)}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
