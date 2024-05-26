import React from 'react';
import Container from '@/components/container';
import ProductsList from '@/components/products/products-list';
import ProductsQueries from '@/components/products/products-queries';
import { getProducts } from '@/lib/data/products';

const Page: React.FC = ({
  searchParams,
}: {
  searchParams?: {
    sort?: string | undefined;
    availability?: string | string[] | undefined;
    feature?: string | string[] | undefined;
  };
}) => {
  const products = getProducts(searchParams);
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-4 gap-10">
          <ProductsQueries />
          <div className="col-span-3">
            <ProductsList products={products} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
