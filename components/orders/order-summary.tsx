import React from 'react';
import { OrderType } from '@/lib/types';
import { SummaryContent, SummaryLine, SummaryText } from '@/components/summary';
import Money from '@/components/money';
import Divider from '@/components/divider';

interface OrderSummaryProps {
  order: OrderType;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ order }) => {
  return (
    <SummaryContent>
      <SummaryLine>
        <SummaryText>Subtotal</SummaryText>
        <Money amount={order.subTotal} currency={order.currency} />
      </SummaryLine>
      <SummaryLine>
        <SummaryText>Shipping</SummaryText>
        <Money
          amount={order.deliveryMethod.price}
          currency={order.deliveryMethod.currency}
        />
      </SummaryLine>
      <SummaryLine>
        <SummaryText>Discount</SummaryText>
        <Money
          amount={order?.discount?.value}
          currency={order?.discount?.currency}
        />
      </SummaryLine>
      <Divider className="my-1" />
      <SummaryLine>
        <SummaryText className="font-semibold text-foreground">
          Total
        </SummaryText>
        <Money amount={order.total} currency={order.currency} />
      </SummaryLine>
    </SummaryContent>
  );
};

export default OrderSummary;
