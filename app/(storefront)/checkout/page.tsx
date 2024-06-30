import React from 'react';
import Container from '@/components/container';
import { Section } from '@/components/section';
import CheckoutContainer from '@/components/checkout/checkout-container';
import createServerClient from '@/lib/supabase/server';
import { getAddresses } from '@/lib/data/addresses';

const Page: React.FC = async () => {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();
  const email = data?.user?.email;
  const addresses = email ? await getAddresses() : [];

  return (
    <Section className="py-0">
      <Container className="grid lg:grid-cols-2">
        <CheckoutContainer email={email} addresses={addresses} />
      </Container>
    </Section>
  );
};

export default Page;
