import React from 'react';
import ProductCard from '@/components/products/product-card';
import { ProductType } from '@/lib/types';

interface ProductListProps {
  products: ProductType[];
}

const ProductsList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
