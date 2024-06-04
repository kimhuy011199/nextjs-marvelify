import React from 'react';
import AddressesList from '@/components/addresses/addresses-list';
import AddressesEmpty from '@/components/addresses/addresses-empty';
import { getAddresses } from '@/lib/data/addresses';

const ListAddresses: React.FC = async () => {
  const addresses = await getAddresses();

  return (
    <>
      {!addresses.length ? (
        <AddressesEmpty />
      ) : (
        <AddressesList addresses={addresses} />
      )}
    </>
  );
};

export default ListAddresses;
