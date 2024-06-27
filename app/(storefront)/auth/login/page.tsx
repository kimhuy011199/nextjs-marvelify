import React from 'react';
import Container from '@/components/container';
import { Section } from '@/components/section';
import { Metadata } from 'next';
import LoginForm from '@/components/authentication/login-form';

export const metadata: Metadata = {
  title: 'Login - Marvel Caseshop',
};

const Page: React.FC = async () => {
  return (
    <Section className="py-16">
      <Container>
        <LoginForm />
      </Container>
    </Section>
  );
};

export default Page;
