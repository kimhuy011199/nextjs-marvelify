import React from 'react';
import AddressCreateButton from '@/components/addresses/address-create-button';
import AddressItem from '@/components/addresses/address-item';
import { AddressType } from '@/lib/types';

interface AddressesListProps {
  addresses: AddressType[];
}

const AddressesList: React.FC<AddressesListProps> = ({ addresses }) => {
  return (
    <div className="flex flex-col">
      <ul className="grid grid-cols-2 gap-4">
        {addresses.map((address) => (
          <li key={address.id}>
            <AddressItem address={address} />
          </li>
        ))}
      </ul>
      <div className="self-end mt-5">
        <AddressCreateButton />
      </div>
    </div>
  );
};

export default AddressesList;
