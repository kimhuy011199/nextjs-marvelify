import React, { useState } from 'react';
import { AddressType } from '@/lib/types';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';

interface Props {
  addresses: AddressType[];
  handleChangeAddress: (addressValue: AddressType) => void;
}

const CheckoutFormAddressSelection: React.FC<Props> = ({
  handleChangeAddress,
  addresses,
}) => {
  const handleValueChange = (value: string) => {
    const address = addresses.find((address) => address.id === value);
    if (address) {
      handleChangeAddress(address);
    }
  };

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
