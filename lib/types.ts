export type VariantType = {
  id: string;
  productHandle: string;
  productName: string;
  name: string;
  price: number;
  discountedPrice: number;
  currency: string;
  availableQuantity: number;
  previewImg: string;
};

export type ProductType = {
  id: string;
  handle: string;
  createdAt: string | Date;
  name: string;
  description: string;
  isFeatured: boolean;
  isAvailableForSale: boolean;
  features: string;
  previewImg: string;
  price: number;
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
  id: string;
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
};

export type CheckoutType = {
  id: string;
  email: string;
  currency: string;
  total: number;
  subTotal: number;
  discount?: DiscountType;
  lineItems: CartLineItemType[];
  shippingAddress: AddressType;
  billingAddress: AddressType;
  deliveryMethod: DeliveryMethodType;
  paymentMethod: PaymentType;
  createdAt: string | Date;
};

export type DiscountType = {
  currency: string;
  value: number;
  code: string;
};

export type OrderType = {
  id: string;
  email: string;
  currency: string;
  total: number;
  subTotal: number;
  discount?: DiscountType;
  cart: CartType;
  shippingAddress: AddressType;
  billingAddress: AddressType;
  deliveryMethod: DeliveryMethodType;
  paymentMethod: PaymentType;
  orderDate: string | Date;
  orderNumber: number;
  status: string;
};

export enum OrderStatusType {
  Pending = 'Pending',
  Processing = 'Processing',
  Shipping = 'Shipping',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled',
}
