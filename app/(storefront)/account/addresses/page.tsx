import React, { Suspense } from 'react';
import {
  SettingCard,
  SettingContent,
  SettingDescription,
  SettingHeading,
} from '@/components/settings';
import ListAddresses from './components/list-addresses';
import AddressesListSkeleton from '@/components/skeletons/addresses-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Addresses - Marvel Caseshop',
};

const Page: React.FC = () => {
  return (
    <SettingCard>
      <SettingHeading>Your Addresses</SettingHeading>
      <SettingDescription>
        Manage your addresses here. Saving your addresses will make them
        available during checkout.
      </SettingDescription>
      <SettingContent>
        <Suspense fallback={<AddressesListSkeleton />}>
          <ListAddresses />
        </Suspense>
      </SettingContent>
    </SettingCard>
  );
};

export default Page;
