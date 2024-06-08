import React, { Suspense } from 'react';
import Container from '@/components/container';
import ArrowLink from '@/components/arrow-link';
import { Section, SectionHeader, SectionHeading } from '@/components/section';
import RelatedProducts from './components/related-products';
import ProductDetail from './components/product-detail';
import ProductsListSkeleton from '@/components/skeletons/products-list';
import ProductDetailSkeleton from '@/components/skeletons/product-detail';
import { Metadata } from 'next';
import { getProductByHandle } from '@/lib/data/products';

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProductByHandle(params.handle);

  if (!product) {
    return {
      title: 'Product not found - Marvel Caseshop',
    };
  }

  return {
    title: product.name + ' - Marvel Caseshop',
  };
}

const Page = async ({ params }: { params: { handle: string } }) => {
  return (
    <>
      <Section>
        <Container>
          <Suspense fallback={<ProductDetailSkeleton />}>
            <ProductDetail handle={params.handle} />
          </Suspense>
        </Container>
      </Section>
      <Section className="pt-0 lg:pb-16 lg:pt-8">
        <Container>
          <SectionHeader>
            <SectionHeading>Related Products</SectionHeading>
            <ArrowLink label="View all" />
          </SectionHeader>
          <Suspense fallback={<ProductsListSkeleton />}>
            <RelatedProducts handle={params.handle} />
          </Suspense>
        </Container>
      </Section>
    </>
  );
};

export default Page;
