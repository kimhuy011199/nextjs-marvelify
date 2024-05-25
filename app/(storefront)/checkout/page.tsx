import React from 'react';
import { redirect } from 'next/navigation';
import Container from '@/components/container';
import CheckoutForm from '@/components/checkout-form';
import CheckoutSummary from '@/components/checkout-summary';
import { getCheckoutStep } from '@/lib/utils';
import { ROUTES } from '@/lib/constants';

const Page: React.FC = ({
  searchParams,
}: {
  searchParams?: {
    step?: string;
  };
}) => {
  const cart = {
    email: 'example@email.com',
    shippingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'US',
    },
    billingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'US',
    },
  };

  const currentCheckoutStep = getCheckoutStep(cart, searchParams?.step);
  if (currentCheckoutStep !== searchParams?.step) {
    redirect(`${ROUTES.CHECKOUT}?step=${currentCheckoutStep}`);
  }

  return (
    <section className="">
      <Container className="grid grid-cols-2">
        <div className="pr-10 py-10">
          <CheckoutForm />
        </div>
        <div className="pl-10 py-10 border-l border-l-gray-200">
          <CheckoutSummary />
        </div>
      </Container>
    </section>
  );
};

export default Page;
