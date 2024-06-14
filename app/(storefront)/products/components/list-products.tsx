import React from 'react';
import ProductsList from '@/components/products/products-list';
import { ProductSearchParamsInterface, getProducts } from '@/lib/data/products';
import ProductsPagination from '@/components/products/products-pagination';

interface ListProductsProps {
  searchParams: ProductSearchParamsInterface | undefined;
}

const ListProducts: React.FC<ListProductsProps> = async ({ searchParams }) => {
  const { totalPages, products } = await getProducts(searchParams);
  return (
    <>
      <ProductsList products={products} className="grid-cols-3" />
      <ProductsPagination totalPages={totalPages} />
    </>
  );
};

export default ListProducts;
