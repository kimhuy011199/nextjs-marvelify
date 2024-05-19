import React from 'react';
import AccountAddressCreateButton from '@/components/account-address-create-button';

const AccountAddressesEmpty: React.FC = () => {
  return (
    <div className="py-10 flex flex-col gap-6 w-full items-center justify-center">
      <p>You don&apos;t have any addresses yet!</p>
      <AccountAddressCreateButton />
    </div>
  );
};

export default AccountAddressesEmpty;
