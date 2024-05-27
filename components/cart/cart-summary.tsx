'use client';

import React from 'react';
import Divider from '@/components/divider';
import { Button } from '@/components/ui/button';
import {
  SummaryCard,
  SummaryHeading,
  SummaryContent,
  SummaryLine,
  SummaryText,
} from '@/components/summary';
import Money from '@/components/money';
import { useCart } from '@/lib/hooks/use-cart';
import { useRouter } from 'next/navigation';
import { CHECKOUT_STEPS, ROUTES } from '@/lib/constants';

const CartSummary: React.FC = () => {
  const cart = useCart();
  const subTotal = cart.calculateSubTotal();
  const router = useRouter();

  const handleProceedToCheckout = () => {
    router.push(`${ROUTES.CHECKOUT}?step=${CHECKOUT_STEPS.ADDRESS}`);
  };

  return (
    <SummaryCard className="min-w-72">
      <SummaryHeading>Cart Summary</SummaryHeading>
      <SummaryContent>
        <SummaryLine>
          <SummaryText>Subtotal</SummaryText>
          <Money
            amount={subTotal}
            currency={cart.items[0].productVariant.currency}
          />
        </SummaryLine>
        <SummaryLine>
          <SummaryText>Shipping</SummaryText>
          <SummaryText>Calculated later</SummaryText>
        </SummaryLine>
        <SummaryLine>
          <SummaryText>Discount</SummaryText>
          <Money amount={0} currency={cart.items[0].productVariant.currency} />
        </SummaryLine>
        <Divider className="my-2" />
        <SummaryLine>
          <SummaryText>Total</SummaryText>
          <Money
            amount={subTotal}
            currency={cart.items[0].productVariant.currency}
          />
        </SummaryLine>
      </SummaryContent>
      <Button onClick={handleProceedToCheckout} className="mt-4 w-full">
        Proceed to Checkout
      </Button>
    </SummaryCard>
  );
};

export default CartSummary;
