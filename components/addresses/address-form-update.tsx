'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import AddressForm, {
  FormSchema,
  FormType,
} from '@/components/addresses/address-form';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { AddressType } from '@/lib/types';
import { DEFAULT_EMAIL } from '@/lib/constants';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { updateAddress } from '@/lib/actions/addresses';

interface AddressFormUpdateProps {
  defaultValues: AddressType;
  callback?: () => void;
}

const AddressFormUpdate: React.FC<AddressFormUpdateProps> = ({
  defaultValues,
  callback,
}) => {
  const { toast } = useToast();
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { ...defaultValues, email: DEFAULT_EMAIL },
  });

  const { mutate: update } = useMutation({
    mutationKey: ['updateAddress'],
    mutationFn: updateAddress,
    onSuccess: () => {
      setIsLoadingUpdate(false);
      toast({
        title: 'Update address successfully',
      });
    },
    onError: () => {
      setIsLoadingUpdate(false);
      toast({
        title: 'Something went wrong',
        description: 'There was an error on our end. Please try again.',
        variant: 'destructive',
      });
    },
  });

  // const handleDelete = async () => {
  //   setIsLoadingDelete(true);
  //   await deleteAddress();
  //   toast({
  //     title: 'Delete address successfully',
  //   });
  //   callback?.();
  // }

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setIsLoadingUpdate(true);
    const { email, ...address } = data;
    update({ ...address, id: defaultValues.id });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AddressForm type={FormType.Update} form={form} />
        <div className="flex justify-between mt-5">
          <Button
            type="button"
            variant="outline"
            className="text-primary border-primary bg-white hover:bg-red-100 hover:text-primary min-w-24"
            isLoading={isLoadingDelete}
            disabled={isLoadingDelete || isLoadingUpdate}
          >
            Delete
          </Button>
          <Button
            className="min-w-24"
            isLoading={isLoadingUpdate}
            disabled={isLoadingDelete || isLoadingUpdate}
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddressFormUpdate;
