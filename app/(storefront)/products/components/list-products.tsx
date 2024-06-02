import React from 'react';
import ProductsList from '@/components/products/products-list';
import { getProducts } from '@/lib/data/products';

interface ListProductsProps {
  searchParams:
    | {
        sort?: string | undefined;
        availability?: string | string[] | undefined;
        feature?: string | string[] | undefined;
      }
    | undefined;
}

const ListProducts: React.FC<ListProductsProps> = async ({ searchParams }) => {
  const products = await getProducts(searchParams);
  return <ProductsList products={products} className="grid-cols-3" />;
};

export default ListProducts;
