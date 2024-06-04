'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';
import AddressForm, {
  FormSchema,
  FormType,
} from '@/components/addresses/address-form';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { AddressType } from '@/lib/types';

interface AddressFormUpdateProps {
  defaultValues: AddressType;
}

const AddressFormUpdate: React.FC<AddressFormUpdateProps> = ({
  defaultValues,
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { ...defaultValues, email: 'user@mail.com' },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const { email, ...address } = data;
    const id = uuidv4();
    console.log('data', { id, email, address });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AddressForm type={FormType.Create} form={form} />
        <div className="flex justify-between mt-5">
          <Button
            type="button"
            variant="outline"
            className="text-primary border-primary bg-white hover:bg-red-100 hover:text-primary"
          >
            Delete
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Form>
  );
};

export default AddressFormUpdate;
