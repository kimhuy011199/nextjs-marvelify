'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_SHIPPING_ADDRESS } from '@/lib/constants';
import AddressForm, {
  FormSchema,
  FormType,
} from '@/components/addresses/address-form';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

const AddressFormCreate: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: 'user@mail.com', ...DEFAULT_SHIPPING_ADDRESS },
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
        <div className="flex justify-end mt-5">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Form>
  );
};

export default AddressFormCreate;
