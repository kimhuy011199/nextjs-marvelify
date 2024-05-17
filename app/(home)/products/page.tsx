import React from 'react';
import Container from '@/components/container';
import ProductsList from '@/components/products-list';

const Page = () => {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <ProductsList />
      </Container>
    </section>
  );
};

export default Page;
