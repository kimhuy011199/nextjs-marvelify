import React, { Suspense } from 'react';
import OrderDetail from '@/components/orders/order-detail';
import OrderDetailSkeleton from '@/components/skeletons/order-detail';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order - Marvel Caseshop',
};

const Page = async ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<OrderDetailSkeleton />}>
      <OrderDetail id={params.id} />
    </Suspense>
  );
};

export default Page;
