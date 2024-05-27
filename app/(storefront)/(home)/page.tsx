import React from 'react';
import Container from '@/components/container';
import { Section, SectionHeader, SectionHeading } from '@/components/section';
import ProductsList from '@/components/products/products-list';
import ArrowLink from '@/components/arrow-link';
import { getFeaturedProducts } from '@/lib/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PERSONAL_LINKS } from '@/lib/constants';

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

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
          <ProductsList products={featuredProducts} className="grid-cols-4" />
        </Container>
      </Section>
    </>
  );
};

export default Home;
