'use client';

import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { COUNTRY_OPTIONS } from '@/lib/constants';
import { z } from 'zod';

export const FormSchema = z.object({
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

export enum FormType {
  Create = 'create',
  Update = 'update',
  Checkout = 'checkout',
}

interface AddressFormProps {
  type: FormType;
  form: any;
}

const AddressForm: React.FC<AddressFormProps> = ({ type, form }) => {
  return (
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
  );
};

export default AddressForm;
