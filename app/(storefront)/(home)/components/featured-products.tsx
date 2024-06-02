import React from 'react';
import { getFeaturedProducts } from '@/lib/data/products';
import ProductsList from '@/components/products/products-list';

const FeaturedProducts: React.FC = async () => {
  const featuredProducts = await getFeaturedProducts();

  return <ProductsList products={featuredProducts} />;
};

export default FeaturedProducts;
