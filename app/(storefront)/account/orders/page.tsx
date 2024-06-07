import React, { Suspense } from 'react';
import {
  SettingCard,
  SettingContent,
  SettingDescription,
  SettingHeading,
} from '@/components/settings';
import ListOrders from './components/list-orders';
import OrdersListSkeleton from '@/components/skeletons/orders-list';

const Page: React.FC = () => {
  return (
    <SettingCard>
      <SettingHeading>Orders History</SettingHeading>
      <SettingDescription>
        View your previous orders and their status here.
      </SettingDescription>
      <SettingContent>
        <Suspense fallback={<OrdersListSkeleton />}>
          <ListOrders />
        </Suspense>
      </SettingContent>
    </SettingCard>
  );
};

export default Page;
