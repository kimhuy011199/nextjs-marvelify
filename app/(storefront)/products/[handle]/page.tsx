import React from 'react';
import Container from '@/components/container';
import ProductForm from '@/components/products/product-form';
import ProductsList from '@/components/products/products-list';
import ArrowLink from '@/components/arrow-link';
import { Section, SectionHeader, SectionHeading } from '@/components/section';
import { getProductByHandle, getRelatedProducts } from '@/lib/data/products';

const Page = ({ params }: { params: { handle: string } }) => {
  const product = getProductByHandle(params.handle);
  const relatedProducts = getRelatedProducts(product?.id as string);

  if (!product) {
    return null;
  }

  return (
    <>
      <Section>
        <Container>
          <ProductForm product={product} />
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader>
            <SectionHeading>Related Products</SectionHeading>
            <ArrowLink label="View all" />
          </SectionHeader>
          <ProductsList products={relatedProducts} className="grid-cols-4" />
        </Container>
      </Section>
    </>
  );
};

export default Page;
