'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DEFAULT_EMAIL, DEFAULT_SHIPPING_ADDRESS } from '@/lib/constants';
import AddressForm, {
  FormSchema,
  FormType,
} from '@/components/addresses/address-form';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { createAddress } from '@/lib/actions/addresses';
import { useToast } from '@/components/ui/use-toast';

interface AddressFormCreateProps {
  callback?: () => void;
}

const AddressFormCreate: React.FC<AddressFormCreateProps> = ({ callback }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: DEFAULT_EMAIL, ...DEFAULT_SHIPPING_ADDRESS },
  });

  const { mutate: create } = useMutation({
    mutationKey: ['createAddress'],
    mutationFn: createAddress,
    onSuccess: () => {
      setIsLoading(false);
      toast({
        title: 'Create address successfully',
      });
      callback?.();
    },
    onError: () => {
      setIsLoading(false);
      toast({
        title: 'Something went wrong',
        description: 'There was an error on our end. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    const { email, ...address } = data;
    create(address);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AddressForm type={FormType.Create} form={form} />
        <div className="flex justify-end mt-5">
          <Button
            className="min-w-24"
            isLoading={isLoading}
            disabled={isLoading}
            type="submit"
          >
            Create
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddressFormCreate;
