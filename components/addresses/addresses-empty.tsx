import React from 'react';
import AccountAddressCreateButton from '@/components/addresses/address-create-button';
import { BookUser } from 'lucide-react';

const AccountAddressesEmpty: React.FC = () => {
  return (
    <div className="py-10 flex flex-col gap-2 w-full items-center justify-center">
      <div className="mb-4">
        <BookUser size={80} strokeWidth="1" />
      </div>
      <p className="text-lg text-gray-500 mb-3">
        You don&apos;t have any addresses yet!
      </p>
      <AccountAddressCreateButton />
    </div>
  );
};

export default AccountAddressesEmpty;
