import React from 'react';
import Container from '@/components/container';
import CartContainer from '@/components/cart/cart-container';
import { Section } from '@/components/section';
import { Metadata } from 'next';
import createServerClient from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: 'Cart - Marvel Caseshop',
};

const Page: React.FC = async () => {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();

  return (
    <Section className="py-16">
      <Container>
        <CartContainer userId={data?.user?.id} />
      </Container>
    </Section>
  );
};

export default Page;
