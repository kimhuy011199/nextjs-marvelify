import React, { Suspense } from 'react';
import {
  SettingCard,
  SettingContent,
  SettingDescription,
  SettingHeading,
} from '@/components/settings';
import ListOrders from './components/list-orders';
import OrdersListSkeleton from '@/components/skeletons/orders-list';
import { Metadata } from 'next';
import createServerClient from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: 'Orders - Marvel Caseshop',
};

const Page: React.FC = async () => {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();

  return (
    <SettingCard>
      <SettingHeading>Orders History</SettingHeading>
      <SettingDescription>
        View your previous orders and their status here.
      </SettingDescription>
      <SettingContent>
        <Suspense fallback={<OrdersListSkeleton />}>
          <ListOrders userId={data?.user?.id as string} />
        </Suspense>
      </SettingContent>
    </SettingCard>
  );
};

export default Page;
