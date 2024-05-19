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

const AccountAddressCreateButton: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Create new address</Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:max-w-[600px] sm:w-full">
        <SheetHeader>
          <SheetTitle>Add new address</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          <AccountAddressForm type={FormType.Create} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AccountAddressCreateButton;
