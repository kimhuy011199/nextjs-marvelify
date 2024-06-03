import React from 'react';
import AccountAddressesList from '@/components/addresses/addresses-list';
import AccountAddressesEmpty from '@/components/addresses/addresses-empty';
import { getAddresses } from '@/lib/data/addresses';

const ListAddresses: React.FC = async () => {
  const addresses = await getAddresses();

  return (
    <>
      {!addresses.length ? (
        <AccountAddressesEmpty />
      ) : (
        <AccountAddressesList addresses={addresses} />
      )}
    </>
  );
};

export default ListAddresses;
