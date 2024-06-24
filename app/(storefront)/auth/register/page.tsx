import React from 'react';
import Container from '@/components/container';
import { Section } from '@/components/section';
import { Metadata } from 'next';
import Register from '@/components/authentication/register-form';
import { redirect } from 'next/navigation';
import createServerClient from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: 'Register - Marvel Caseshop',
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
        <Register />
      </Container>
    </Section>
  );
};

export default Page;
