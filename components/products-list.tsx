import React from 'react';
import ProductCard from '@/components/product-card';

interface ProductListProps {
  products: {
    id: number;
    createdAt: string;
    name: string;
    price: number;
    currency: string;
    previewImg: string;
  }[];
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
