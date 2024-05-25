import React from 'react';
import {
  SettingCard,
  SettingContent,
  SettingDescription,
  SettingHeading,
} from '@/components/settings';
import AccountAddressesEmpty from '@/components/account-addresses-empty';
import AccountAddressesList from '@/components/account-addresses-list';

// const addresses = [];

const addresses = [
  {
    id: '1',
    name: 'John Doe',
    addressLine1: '150 Elgin Street',
    addressLine2: 'Apartament 1A, 8th floor',
    city: 'Ottawa',
    zipCode: '550000',
    province: 'Ontario',
    country: 'Canada',
    phone: '123-456-7890',
  },
  {
    id: '2',
    name: 'Hello world',
    addressLine1: '222 Elgin Street',
    city: 'Navan',
    zipCode: '550022',
    country: 'United States',
    phone: '123-456-0000',
  },
];

const Page: React.FC = () => {
  return (
    <SettingCard>
      <SettingHeading>Your Addresses</SettingHeading>
      <SettingDescription>
        Manage your addresses here. Saving your addresses will make them
        available during checkout.
      </SettingDescription>
      <SettingContent>
        {!addresses.length ? (
          <AccountAddressesEmpty />
        ) : (
          <AccountAddressesList addresses={addresses} />
        )}
      </SettingContent>
    </SettingCard>
  );
};

export default Page;
