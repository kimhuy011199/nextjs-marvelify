export type VariantType = {
  id: string;
  productHandle: string;
  productName: string;
  name: string;
  price: number;
  priceAfterDiscounted: number;
  currency: string;
  availableQuantity: number;
  previewImg: string;
};

export type ProductType = {
  id: string;
  handle: string;
  createdAt: string;
  name: string;
  description: string;
  isFeatured: boolean;
  isAvailableForSale: boolean;
  features: string;
  previewImg: string;
  variants: VariantType[];
};

export type CartLineItemType = {
  productVariantId: string;
  productVariant: VariantType;
  quantity: number;
};

export type CartType = {
  items: CartLineItemType[];
};

export type AddressType = {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  province?: string;
  postalCode: string;
  country: string;
};

export type DeliveryMethodType = {
  id: string;
  name: string;
  price: number;
  currency: string;
  estimatedDelivery: string;
};

export type PaymentType = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
};

export type CheckoutType = {
  id: string;
  email: string;
  createdAt: string;
  currency: string;
  total: number;
  subTotal: number;
  discount: {
    value: number;
    code: string;
    currency: string;
  };
  lineItems: CartLineItemType[];
  shippingAddress: AddressType;
  billingAddress: AddressType;
  deliveryMethod: DeliveryMethodType;
  paymentMethod: PaymentType;
};

export type DiscountType = {
  currency: string;
  value: number;
  code: string;
};
