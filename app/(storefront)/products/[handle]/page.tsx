import React from 'react';
import Container from '@/components/container';
import ProductForm from '@/components/products/product-form';
import { getProductByHandle } from '@/lib/data/products';

const Page = ({ params }: { params: { handle: string } }) => {
  const product = getProductByHandle(params.handle);

  if (!product) {
    return null;
  }

  return (
    <>
      <section className="bg-gray-50 py-20">
        <Container>
          <ProductForm product={product} />
        </Container>
      </section>
    </>
  );
};

export default Page;
