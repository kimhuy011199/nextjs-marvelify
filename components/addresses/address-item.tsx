import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { FormType } from '@/components/addresses/address-form';
import AddressFormUpdate from '@/components/addresses/address-form-update';
import { AddressType } from '@/lib/types';
import { SquarePen } from 'lucide-react';

interface AddressItemProps {
  address: AddressType;
}

const AddressItem: React.FC<AddressItemProps> = ({ address }) => {
  const addressName = `${address.firstName} ${address.lastName}`;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="w-full h-full text-left justify-between items-start text-base py-4 px-6 rounded-2xl bg-white hover:bg-white"
        >
          <div className="text-accent-foreground">
            <p className="font-semibold pb-1 text-foreground">{addressName}</p>
            <p>{address.address1}</p>
            {address?.address2 && <p>{address.address2}</p>}
            <p>
              {address.city}, {address.province} {address.postalCode}
            </p>
            <p>{address.country}</p>
          </div>
          <div className="text-primary">
            <SquarePen size={16} />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:max-w-[600px] sm:w-full">
        <SheetHeader>
          <SheetTitle>Update address</SheetTitle>
          <SheetDescription>
            Saving your address to use during checkout.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8">
          <AddressFormUpdate defaultValues={address} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddressItem;
