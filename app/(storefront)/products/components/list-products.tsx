import React from 'react';
import ProductsList from '@/components/products/products-list';
import { ProductSearchParamsInterface, getProducts } from '@/lib/data/products';

interface ListProductsProps {
  searchParams: ProductSearchParamsInterface | undefined;
}

const ListProducts: React.FC<ListProductsProps> = async ({ searchParams }) => {
  const products = await getProducts(searchParams);
  return <ProductsList products={products} className="grid-cols-3" />;
};

export default ListProducts;
