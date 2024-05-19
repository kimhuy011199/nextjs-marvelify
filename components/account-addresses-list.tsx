import React from 'react';
import AccountAddressCreateButton from '@/components/account-address-create-button';
import AccountAddressItem from '@/components/account-address-item';

interface AccountAddressesListProps {
  addresses: any[];
}

const AccountAddressesList: React.FC<AccountAddressesListProps> = ({
  addresses,
}) => {
  return (
    <div className="flex flex-col">
      <ul className="grid grid-cols-2 gap-4">
        {addresses.map((address) => (
          <li key={address.id}>
            <AccountAddressItem address={address} />
          </li>
        ))}
      </ul>
      <div className="self-end mt-6">
        <AccountAddressCreateButton />
      </div>
    </div>
  );
};

export default AccountAddressesList;
