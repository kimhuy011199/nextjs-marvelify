'use client';

import React from 'react';
import Container from '@/components/container';
import { Section } from '@/components/section';
import CheckoutContainer from '@/components/checkout/checkout-container';

const Page: React.FC = () => {
  return (
    <Section className="py-0">
      <Container className="grid grid-cols-2">
        <CheckoutContainer />
      </Container>
    </Section>
  );
};

export default Page;
