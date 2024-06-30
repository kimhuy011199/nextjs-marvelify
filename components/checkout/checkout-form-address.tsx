'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CHECKOUT_STEPS,
  ROUTES,
  DEFAULT_SHIPPING_ADDRESS,
} from '@/lib/constants';
import {
  CheckoutStepCard,
  CheckoutStepContent,
  CheckoutStepDescription,
  CheckoutStepHeading,
} from '@/components/checkout/checkout-step';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import CheckoutSubmitAction from '@/components/checkout/checkout-submit-action';
import CheckoutFormAddressSelection from '@/components/checkout/checkout-form-address-selection';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useCheckout } from '@/lib/hooks/use-checkout';
import { Checkbox } from '@/components/ui/checkbox';
import { EXAMPLE_ADDRESSES } from '@/lib/constants';
import AddressForm, {
  FormSchema,
  FormType,
} from '@/components/addresses/address-form';
import { AddressType } from '@/lib/types';

interface CheckoutFormAddressProps {
  email?: string;
  addresses?: AddressType[];
}

const CheckoutFormAddress: React.FC<CheckoutFormAddressProps> = ({
  email,
  addresses,
}) => {
  const [isUseExampleAddress, setIsUseExampleAddress] = useState(false);
  const checkoutState = useCheckout();
  const defaultValues = checkoutState.checkout.shippingAddress.address1
    ? {
        ...checkoutState.checkout.shippingAddress,
        email: checkoutState.checkout.email || email,
      }
    : {
        ...DEFAULT_SHIPPING_ADDRESS,
        email,
      };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });
  const router = useRouter();

  const handleUseExampleAddress = (checked: boolean | string) => {
    form.clearErrors();
    const email = form.getValues('email');
    form.reset(
      checked
        ? { ...EXAMPLE_ADDRESSES[0], email }
        : { ...DEFAULT_SHIPPING_ADDRESS, email }
    );
  };

  const handleChangeAddress = (addressValue: AddressType) => {
    form.clearErrors();
    form.reset({ ...addressValue, email: form.getValues('email') });
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const { email, ...shippingAdress } = data;
    const id = uuidv4();
    checkoutState.setEmail(email);
    checkoutState.setShippingAddress({ ...shippingAdress, id });
    router.push(`${ROUTES.CHECKOUT}?step=${CHECKOUT_STEPS.DELIVERY}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CheckoutStepCard>
          <CheckoutStepHeading>Contact address</CheckoutStepHeading>
          <CheckoutStepDescription>
            Your email address for receiving order notifications.
          </CheckoutStepDescription>
          <CheckoutStepContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="!my-1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CheckoutStepContent>
          <div className="my-10"></div>
          <CheckoutStepHeading>Shipping address</CheckoutStepHeading>
          <CheckoutStepDescription>
            The address where your order will be delivered.
          </CheckoutStepDescription>
          {!email ? (
            <div className="flex items-center space-x-2 mt-3">
              <Checkbox
                id="address"
                checked={isUseExampleAddress}
                onCheckedChange={(checked) => {
                  setIsUseExampleAddress(!!checked);
                  handleUseExampleAddress(checked);
                }}
              />
              <label
                htmlFor="address"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Use the sample shipping address
              </label>
            </div>
          ) : null}
          <CheckoutStepContent>
            {addresses?.length ? (
              <CheckoutFormAddressSelection
                addresses={addresses}
                handleChangeAddress={handleChangeAddress}
              />
            ) : null}
            <AddressForm type={FormType.Checkout} form={form} />
            <CheckoutSubmitAction currentStep={CHECKOUT_STEPS.ADDRESS} />
          </CheckoutStepContent>
        </CheckoutStepCard>
      </form>
    </Form>
  );
};

export default CheckoutFormAddress;
