import React, { Suspense } from 'react';
import Link from 'next/link';
import Container from '@/components/container';
import ArrowLink from '@/components/arrow-link';
import ProductsListSkeleton from '@/components/skeletons/products-list';
import { Section, SectionHeader, SectionHeading } from '@/components/section';
import { Button } from '@/components/ui/button';
import { PERSONAL_LINKS } from '@/lib/constants';
import FeaturedProducts from './components/featured-products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Marvel Caseshop',
};

const Home: React.FC = () => {
  return (
    <>
      <Section className="pb-0">
        <Container>
          <div className="h-[400px] rounded-3xl bg-white border border-accent flex flex-col gap-5 items-center justify-center text-center">
            <h1 className="text-4xl font-semibold leading-normal">
              Explore Our Collection Of <br /> Premium Marvel Character Cases!
            </h1>
            <div className="flex gap-2">
              <Button>
                <ArrowLink label="Shop Now" className="text-white" />
              </Button>
              <Button
                variant="outline"
                className="bg-white hover:text-foreground"
              >
                <Link href={PERSONAL_LINKS.GITHUB}>View on Github</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader>
            <SectionHeading>Featured Products</SectionHeading>
            <ArrowLink label="View all" />
          </SectionHeader>
          <Suspense fallback={<ProductsListSkeleton />}>
            <FeaturedProducts />
          </Suspense>
        </Container>
      </Section>
    </>
  );
};

export default Home;
