import React from 'react';
import Container from '@/components/container';
import { Section } from '@/components/section';
import { Metadata } from 'next';
import LoginForm from '@/components/authentication/login-form';
import { redirect } from 'next/navigation';
import createServerClient from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: 'Login - Marvel Caseshop',
};

const Page: React.FC = async () => {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();
  if (data?.user?.id) {
    redirect('/');
  }

  return (
    <Section className="py-16">
      <Container>
        <LoginForm />
      </Container>
    </Section>
  );
};

export default Page;
