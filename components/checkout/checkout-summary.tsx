'use client';

import React from 'react';
import Divider from '@/components/divider';
import { SummaryContent, SummaryLine, SummaryText } from '@/components/summary';
import Money from '@/components/money';
import { useCart } from '@/lib/hooks/use-cart';
import CheckoutFormDiscount from '@/components/checkout/checkout-form-discount';
import CheckoutItemsList from '@/components/checkout/checkout-items-list';

const CheckoutSummary: React.FC = () => {
  const cart = useCart();
  const subTotal = cart.calculateSubTotal();

  return (
    <>
      <SummaryContent>
        <CheckoutItemsList />
        <Divider className="my-3" />
        <CheckoutFormDiscount />
        <Divider className="my-3" />
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
        <Divider className="my-1" />
        <SummaryLine>
          <SummaryText className="font-semibold text-foreground">
            Total
          </SummaryText>
          <Money
            amount={subTotal}
            currency={cart.items[0].productVariant.currency}
          />
        </SummaryLine>
      </SummaryContent>
    </>
  );
};

export default CheckoutSummary;
