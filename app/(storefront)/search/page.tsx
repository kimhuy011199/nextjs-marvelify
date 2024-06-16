import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { Section } from '@/components/section';
import Container from '@/components/container';
import SearchContainer from './components/search-container';
import SearchContainerSkeleton from '@/components/skeletons/search-container';

export const metadata: Metadata = {
  title: 'Search - Marvel Caseshop',
};

const Page: React.FC = () => {
  return (
    <Section>
      <Container className="lg:max-w-4xl">
        <Suspense fallback={<SearchContainerSkeleton />}>
          <SearchContainer />
        </Suspense>
      </Container>
    </Section>
  );
};

export default Page;
