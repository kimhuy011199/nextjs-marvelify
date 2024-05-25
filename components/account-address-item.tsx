import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import AccountAddressForm, {
  FormType,
} from '@/components/account-address-form';

interface AccountAddressItemProps {
  address: {
    id: string;
    name: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    zipCode: string;
    province?: string;
    country: string;
    phone: string;
  };
}

const AccountAddressItem: React.FC<AccountAddressItemProps> = ({ address }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="w-full h-full text-left justify-start items-start text-base py-4 px-6 rounded-2xl"
        >
          <div className="text-muted-foreground">
            <p className="font-semibold pb-1 text-foreground">{address.name}</p>
            <p>{address.addressLine1}</p>
            {address.addressLine2 && <p>{address.addressLine2}</p>}
            <p>
              {address.city}, {address.province} {address.zipCode}
            </p>
            <p>{address.country}</p>
            <p>{address.phone}</p>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:max-w-[600px] sm:w-full">
        <SheetHeader>
          <SheetTitle>Update address</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          <AccountAddressForm type={FormType.Update} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AccountAddressItem;
