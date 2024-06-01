'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CHECKOUT_STEPS,
  COUNTRY_OPTIONS,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CheckoutSubmitAction from '@/components/checkout/checkout-submit-action';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useCheckout } from '@/lib/hooks/use-checkout';
import { Checkbox } from '@/components/ui/checkbox';
import { getExampleAddress } from '@/lib/data/addresses';

const FormSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z
    .string()
    .min(1, {
      message: 'First name is required',
    })
    .refine((value) => value.trim() !== '', {
      message: 'First name is required',
    }),
  lastName: z
    .string()
    .min(1, {
      message: 'Last name is required',
    })
    .refine((value) => value.trim() !== '', {
      message: 'Last name is required',
    }),
  address1: z
    .string()
    .min(1, {
      message: 'Address is required',
    })
    .refine((value) => value.trim() !== '', {
      message: 'Address is required',
    }),
  address2: z.string().optional(),
  city: z
    .string()
    .min(1, {
      message: 'City is required',
    })
    .refine((value) => value.trim() !== '', {
      message: 'City is required',
    }),
  postalCode: z.string().regex(/^[0-9]{5,6}$/, 'Invalid postal code'),
  province: z.string().optional(),
  country: z.string(),
});

const CheckoutFormAddress: React.FC = () => {
  const [isUseExampleAddress, setIsUseExampleAddress] = useState(false);
  const checkoutState = useCheckout();
  const defaultValues = checkoutState.checkout.shippingAddress.address1
    ? {
        ...checkoutState.checkout.shippingAddress,
        email: checkoutState.checkout.email,
      }
    : {
        ...DEFAULT_SHIPPING_ADDRESS,
        email: '',
      };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });
  console.log('checkoutState', checkoutState.checkout);
  const router = useRouter();

  const handleUseExampleAddress = (checked: boolean | string) => {
    form.clearErrors();
    const email = form.getValues('email');
    form.reset(
      checked
        ? { ...getExampleAddress(), email }
        : { ...DEFAULT_SHIPPING_ADDRESS, email }
    );
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const { email, ...shippingAdress } = data;
    checkoutState.setEmail(email);
    checkoutState.setShippingAddress(shippingAdress);
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
          <CheckoutStepContent>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input className="!my-1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input className="!my-1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="address1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input className="!my-1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apartment, suite...</FormLabel>
                    <FormControl>
                      <Input className="!my-1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input className="!my-1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Postal code</FormLabel>
                      <FormControl>
                        <Input className="!my-1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="province"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Province</FormLabel>
                      <FormControl>
                        <Input className="!my-1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>Country</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="!my-1">
                          {COUNTRY_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <CheckoutSubmitAction currentStep={CHECKOUT_STEPS.ADDRESS} />
          </CheckoutStepContent>
        </CheckoutStepCard>
      </form>
    </Form>
  );
};

export default CheckoutFormAddress;
