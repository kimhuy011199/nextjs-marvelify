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
  PAYMENT_METHOD_OPTIONS,
  ROUTES,
} from '@/lib/constants';
import { useCheckout } from '@/lib/hooks/use-checkout';
import { useRouter } from 'next/navigation';
import { placeOrder } from '@/lib/actions';
import { useCart } from '@/lib/hooks/use-cart';

const FormSchema = z.object({
  method: z.string(),
});

const CheckoutFormPayment: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      method: PAYMENT_METHOD_OPTIONS[0].id,
    },
  });
  const checkoutState = useCheckout();
  const cart = useCart();
  const router = useRouter();

  const onSubmit = async (formData: z.infer<typeof FormSchema>) => {
    // Create order
    const { id, createdAt, paymentMethod, ...checkoutData } =
      checkoutState.checkout;
    const data = { ...checkoutData, paymentMethodId: formData.method };
    const order = await placeOrder(data);

    if (order) {
      // Remove cart
      checkoutState.clear();
      cart.clear();

      // Redirect to thank you page
      const thankYouPageUrl = `${ROUTES.THANK_YOU}/${order.id}`;
      router.replace(thankYouPageUrl);
    }
  };

  return (
    <CheckoutStepCard>
      <CheckoutStepHeading>Payment method</CheckoutStepHeading>
      <CheckoutStepDescription>
        All transactions are secure and encrypted.
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
                      {PAYMENT_METHOD_OPTIONS.map((method) => (
                        <FormItem key={method.id}>
                          <FormLabel className="cursor-pointer px-4 py-3.5 flex flex-col w-full text-base border border-accent rounded-xl bg-white">
                            <div className="flex justify-between">
                              <div className="flex items-center gap-3">
                                <FormControl>
                                  <RadioGroupItem value={method.id} />
                                </FormControl>
                                <span>{method.name}</span>
                              </div>
                            </div>
                            <span className="text-accent-foreground font-normal pl-7">
                              {method.description}
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
              currentStep={CHECKOUT_STEPS.PAYMENT}
              isLoading={form.formState.isSubmitting}
              isDisabled={form.formState.isSubmitting}
            />
          </form>
        </Form>
      </CheckoutStepContent>
    </CheckoutStepCard>
  );
};

export default CheckoutFormPayment;
