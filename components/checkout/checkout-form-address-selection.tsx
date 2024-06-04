import React, { useEffect, useState } from 'react';
import { AddressType } from '@/lib/types';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';
import { getAddresses } from '@/lib/data/addresses';

interface Props {
  handleChangeAddress: (addressValue: AddressType) => void;
}

const CheckoutFormAddressSelection: React.FC<Props> = ({
  handleChangeAddress,
}) => {
  const [addresses, setAddresses] = useState<AddressType[]>([]);

  const handleValueChange = (value: string) => {
    const address = addresses.find((address) => address.id === value);
    if (address) {
      handleChangeAddress(address);
    }
  };

  const fetchAddresses = async () => {
    const addresses = await getAddresses();
    setAddresses(addresses);
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  if (!addresses.length) {
    return (
      <div className="mb-5 h-10 w-full bg-gray-200 animate-pulse rounded-md"></div>
    );
  }

  return (
    <div className="mb-5">
      <Select onValueChange={handleValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Choose your address" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {addresses.map((option) => (
              <SelectItem key={option.id} value={option.id}>
                {`${option.firstName} ${option.lastName}, ${option.address1}, ${option.city}`}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CheckoutFormAddressSelection;
