import React, { Suspense } from 'react';
import OrderDetail from '@/components/orders/order-detail';
import OrderDetailSkeleton from '@/components/skeletons/order-detail';
import Container from '@/components/container';

const Page = async ({ params }: { params: { id: string } }) => {
  return (
    <section className="bg-gray-50 py-10">
      <Container className="lg:max-w-5xl">
        <div className="flex flex-col gap-1 mb-8 text-2xl font-medium">
          <p>Thank you!</p>
          <p>Your order was placed successfully.</p>
        </div>
        <Suspense fallback={<OrderDetailSkeleton />}>
          <OrderDetail id={params.id} />
        </Suspense>
      </Container>
    </section>
  );
};

export default Page;
