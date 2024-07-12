import { AddressType } from '@/lib/types';

export type OrderInputDataType = {
  cartId?: string;
  email: string;
  currency: string;
  total: number;
  subTotal: number;
  paymentMethodId: string;
  discount?: {
    code: string;
  };
  shippingAddress: AddressType;
  billingAddress?: AddressType;
  lineItems: Array<{
    productVariantId: string;
    quantity: number;
  }>;
  deliveryMethod: {
    id: string;
  };
};
