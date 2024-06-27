import React from 'react';
import Container from '@/components/container';
import { Section } from '@/components/section';
import { Metadata } from 'next';
import Register from '@/components/authentication/register-form';

export const metadata: Metadata = {
  title: 'Register - Marvel Caseshop',
};

const Page: React.FC = async () => {
  return (
    <Section className="py-16">
      <Container>
        <Register />
      </Container>
    </Section>
  );
};

export default Page;
