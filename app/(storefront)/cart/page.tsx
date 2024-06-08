import React from 'react';
import Container from '@/components/container';
import CartContainer from '@/components/cart/cart-container';
import { Section } from '@/components/section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart - Marvel Caseshop',
};

const Page: React.FC = () => {
  return (
    <Section className="py-16">
      <Container>
        <CartContainer />
      </Container>
    </Section>
  );
};

export default Page;
