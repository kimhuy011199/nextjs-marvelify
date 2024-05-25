'use client';

import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckoutStepCard,
  CheckoutStepContent,
  CheckoutStepDescription,
  CheckoutStepHeading,
} from '@/components/checkout-step';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import CheckoutSubmitAction from '@/components/checkout-submit-action';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CHECKOUT_STEPS } from '@/lib/constants';

const FormSchema = z.object({
  method: z.string(),
});

const deliveryMethods = [
  {
    label: 'Marvel Express Standard',
    value: 'standard',
    price: 10,
    estimatedDelivery: 'Next 5 days',
  },
  {
    label: 'Marvel Express Expedited',
    value: 'expedited',
    price: 15,
    estimatedDelivery: 'Next 3 days',
  },
  {
    label: 'Marvel Express Premium',
    value: 'premium',
    price: 20,
    estimatedDelivery: 'Tomorrow',
  },
];

const CheckoutFormDelivery: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      method: deliveryMethods[1].value,
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log('data', data);
  };

  return (
    <CheckoutStepCard>
      <CheckoutStepHeading>Delivery method</CheckoutStepHeading>
      <CheckoutStepDescription>
        Choose your preferred delivery method.
      </CheckoutStepDescription>
      <CheckoutStepContent>
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="method"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col gap-2"
                    >
                      {deliveryMethods.map((method) => (
                        <FormItem key={method.value}>
                          <FormLabel className="px-4 py-3.5 flex flex-col w-full text-base border border-gray-200 rounded-xl bg-white">
                            <div className="flex justify-between">
                              <div className="flex items-center gap-3">
                                <FormControl>
                                  <RadioGroupItem value={method.value} />
                                </FormControl>
                                <span>{method.label}</span>
                              </div>
                              <span>${method.price}</span>
                            </div>
                            <span className="text-muted-foreground pl-7">
                              {method.estimatedDelivery}
                            </span>
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CheckoutSubmitAction
              currentStep={CHECKOUT_STEPS.DELIVERY}
              callback={() => onSubmit(form.getValues())}
            />
          </form>
        </Form>
      </CheckoutStepContent>
    </CheckoutStepCard>
  );
};

export default CheckoutFormDelivery;
