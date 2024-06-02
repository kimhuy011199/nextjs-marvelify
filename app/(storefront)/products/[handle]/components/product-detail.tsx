import React from 'react';
import ProductForm from '@/components/products/product-form';
import { getProductByHandle } from '@/lib/data/products';

interface ProductDetailProps {
  handle: string;
}

const ProductDetail: React.FC<ProductDetailProps> = async ({ handle }) => {
  const product = await getProductByHandle(handle);

  if (!product) {
    return null;
  }

  return <ProductForm product={product} />;
};

export default ProductDetail;
