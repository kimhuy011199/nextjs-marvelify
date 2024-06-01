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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  CHECKOUT_STEPS,
  DELIVERY_METHOD_OPTIONS,
  ROUTES,
} from '@/lib/constants';
import { useCheckout } from '@/lib/hooks/use-checkout';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
  method: z.string(),
});

const CheckoutFormDelivery: React.FC = () => {
  const checkoutState = useCheckout();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      method:
        checkoutState.checkout.deliveryMethod.id ||
        DELIVERY_METHOD_OPTIONS[1].id,
    },
  });
  const router = useRouter();

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const selectedMethod = DELIVERY_METHOD_OPTIONS.find(
      (method) => method.id === data.method
    );
    if (selectedMethod) {
      checkoutState.setDeliveryMethod(selectedMethod);
      checkoutState.calculateTotal();
      router.push(`${ROUTES.CHECKOUT}?step=${CHECKOUT_STEPS.PAYMENT}`);
    }
  };

  return (
    <CheckoutStepCard>
      <CheckoutStepHeading>Delivery method</CheckoutStepHeading>
      <CheckoutStepDescription>
        Choose your preferred delivery method.
      </CheckoutStepDescription>
      <CheckoutStepContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                      {DELIVERY_METHOD_OPTIONS.map((method) => (
                        <FormItem key={method.id}>
                          <FormLabel className="cursor-pointer px-4 py-3.5 flex flex-col w-full text-base border border-accent rounded-xl bg-white">
                            <div className="flex justify-between">
                              <div className="flex items-center gap-3">
                                <FormControl>
                                  <RadioGroupItem value={method.id} />
                                </FormControl>
                                <span>{method.name}</span>
                              </div>
                              <span>${method.price}</span>
                            </div>
                            <span className="text-accent-foreground pl-7">
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
            <CheckoutSubmitAction currentStep={CHECKOUT_STEPS.DELIVERY} />
          </form>
        </Form>
      </CheckoutStepContent>
    </CheckoutStepCard>
  );
};

export default CheckoutFormDelivery;
