'use client';

import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import AddressFormCreate from '@/components/addresses/address-form-create';

const AddressCreateButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button>Create new address</Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:max-w-[600px] sm:w-full">
        <SheetHeader>
          <SheetTitle>Add new address</SheetTitle>
          <SheetDescription>
            Add a new address to use during checkout.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8">
          <AddressFormCreate callback={() => setIsOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddressCreateButton;
