import { create } from 'zustand';
import {
  AddressType,
  CheckoutType,
  DeliveryMethodType,
  DiscountType,
} from '@/lib/types';
import { DEFAULT_SHIPPING_ADDRESS } from '@/lib/constants';

interface CheckoutStore {
  checkout: CheckoutType;
  setEmail: (email: string) => void;
  setShippingAddress: (shippingAddress: AddressType) => void;
  setBillingAddress: (billingAddress: AddressType) => void;
  setDeliveryMethod: (deliveryMethod: DeliveryMethodType) => void;
  setDiscount: (discount: DiscountType) => void;
  setCartItems: (cartItems: any[]) => void;
  clearDiscount: () => void;
  calculateSubTotal: () => number;
  calculateTotal: () => number;
}

const DEFAULT_CHECKOUT: CheckoutType = {
  id: '',
  email: '',
  createdAt: '',
  currency: 'USD',
  total: 0,
  subTotal: 0,
  discount: {
    value: 0,
    code: '',
    currency: 'USD',
  },
  lineItems: [],
  shippingAddress: DEFAULT_SHIPPING_ADDRESS,
  billingAddress: DEFAULT_SHIPPING_ADDRESS,
  deliveryMethod: {
    id: '',
    name: '',
    price: 0,
    currency: '',
    estimatedDelivery: '',
  },
  paymentMethod: {
    id: '',
    name: '',
    description: '',
    price: 0,
    currency: '',
  },
};

const useCheckout = create<CheckoutStore>((set, get) => ({
  checkout: DEFAULT_CHECKOUT,
  setEmail: (email) => {
    set((state) => ({ checkout: { ...state.checkout, email } }));
  },
  setShippingAddress: (shippingAddress) => {
    set((state) => ({
      checkout: { ...state.checkout, shippingAddress },
    }));
  },
  setBillingAddress: (billingAddress) => {
    set((state) => ({
      checkout: { ...state.checkout, billingAddress },
    }));
  },
  setDeliveryMethod: (deliveryMethod) => {
    set((state) => ({
      checkout: { ...state.checkout, deliveryMethod },
    }));
  },
  setDiscount: (discount) => {
    set((state) => ({
      checkout: {
        ...state.checkout,
        discount: {
          value: discount.value,
          code: discount.code,
          currency: discount.currency,
        },
      },
    }));
  },
  clearDiscount: () => {
    set((state) => ({
      checkout: {
        ...state.checkout,
        discount: {
          value: 0,
          code: '',
          currency: 'USD',
        },
      },
    }));
  },
  calculateSubTotal: () => {
    const { checkout } = get();
    const subTotal = checkout.lineItems.reduce(
      (acc, item) => acc + item.productVariant.discountedPrice * item.quantity,
      0
    );
    set((state) => ({
      checkout: { ...state.checkout, subTotal },
    }));
    return subTotal;
  },
  calculateTotal: () => {
    const { checkout } = get();
    const total =
      checkout.subTotal +
      checkout.deliveryMethod?.price -
      checkout.discount?.value;
    set((state) => ({
      checkout: { ...state.checkout, total },
    }));
    return total;
  },
  setCartItems: (lineItems) => {
    set((state) => ({
      checkout: { ...state.checkout, lineItems },
    }));
  },
}));

export { useCheckout };
