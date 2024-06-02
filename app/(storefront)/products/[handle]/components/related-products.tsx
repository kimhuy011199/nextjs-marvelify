import React from 'react';
import ProductsList from '@/components/products/products-list';
import { getRelatedProducts } from '@/lib/data/products';

interface RelatedProductsProps {
  handle: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = async ({ handle }) => {
  const relatedProducts = await getRelatedProducts(handle);

  if (!relatedProducts.length) {
    return null;
  }

  return <ProductsList products={relatedProducts} />;
};

export default RelatedProducts;
