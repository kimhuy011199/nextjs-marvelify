import React, { Suspense } from 'react';
import Container from '@/components/container';
import ProductsQueries from '@/components/products/products-queries';
import { Section } from '@/components/section';
import ListProducts from './components/list-products';
import ProductsListSkeleton from '@/components/skeletons/products-list';
import { ProductSearchParamsInterface } from '@/lib/data/products';
import ProductsPagination from '@/components/products/products-pagination';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - Marvel Caseshop',
};

const Page: React.FC = ({
  searchParams,
}: {
  searchParams?: ProductSearchParamsInterface;
}) => {
  // Use for re-render suspense component
  const suspenseKey = new URLSearchParams(searchParams as any).toString();

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-4 gap-10">
          <ProductsQueries searchParams={searchParams} />
          <div className="col-span-3">
            <div className="flex flex-col gap-8">
              <Suspense
                key={suspenseKey}
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
              {/* <ProductsPagination /> */}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Page;
