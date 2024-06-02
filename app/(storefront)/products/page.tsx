import React, { Suspense } from 'react';
import Container from '@/components/container';
import ProductsQueries from '@/components/products/products-queries';
import { Section } from '@/components/section';
import ListProducts from './components/list-products';
import ProductsListSkeleton from '@/components/skeletons/products-list';

const Page: React.FC = ({
  searchParams,
}: {
  searchParams?: {
    sort?: string | undefined;
    availability?: string | string[] | undefined;
    feature?: string | string[] | undefined;
  };
}) => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-4 gap-10">
          <ProductsQueries />
          <div className="col-span-3">
            <Suspense
              fallback={
                <ProductsListSkeleton
                  itemEachRow={3}
                  rows={2}
                  className="grid-cols-3"
                />
              }
            >
              <ListProducts searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Page;
