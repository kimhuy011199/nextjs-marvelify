'use client';

import React from 'react';
import Divider from '@/components/divider';
import { SummaryContent, SummaryLine, SummaryText } from '@/components/summary';
import Money from '@/components/money';
import CheckoutFormDiscount from '@/components/checkout/checkout-form-discount';
import CheckoutItemsList from '@/components/checkout/checkout-items-list';
import { useCheckout } from '@/lib/hooks/use-checkout';

const CheckoutSummary: React.FC = () => {
  const checkoutState = useCheckout();
  const shippingPrice = checkoutState.checkout?.deliveryMethod?.price || 0;

  const renderShippingPrice = () => {
    if (!shippingPrice) {
      return <SummaryText>Calculated later</SummaryText>;
    }

    return (
      <Money
        amount={shippingPrice}
        currency={checkoutState.checkout.currency}
      />
    );
  };

  return (
    <>
      <div className="block lg:hidden mb-5">
        <h2 className="font-semibold text-xl">Order summary</h2>
      </div>
      <SummaryContent>
        <CheckoutItemsList />
        <Divider className="my-3" />
        <CheckoutFormDiscount />
        <Divider className="my-3" />
        <SummaryLine>
          <SummaryText>Subtotal</SummaryText>
          <Money
            amount={checkoutState.checkout.subTotal}
            currency={checkoutState.checkout.currency}
          />
        </SummaryLine>
        <SummaryLine>
          <SummaryText>Shipping</SummaryText>
          {renderShippingPrice()}
        </SummaryLine>
        <SummaryLine>
          <SummaryText>Discount</SummaryText>
          <Money
            amount={checkoutState.checkout.discount.value}
            currency={checkoutState.checkout.discount.currency}
          />
        </SummaryLine>
        <Divider className="my-1" />
        <SummaryLine>
          <SummaryText className="font-semibold text-foreground">
            Total
          </SummaryText>
          <Money
            amount={checkoutState.checkout.total}
            currency={checkoutState.checkout.currency}
          />
        </SummaryLine>
      </SummaryContent>
    </>
  );
};

export default CheckoutSummary;
