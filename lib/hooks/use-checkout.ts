import { create } from 'zustand';
import { AddressType, CheckoutType, DeliveryMethodType } from '@/lib/types';
import { DEFAULT_SHIPPING_ADDRESS } from '@/lib/constants';

interface CheckoutStore {
  checkout: CheckoutType;
  setEmail: (email: string) => void;
  setShippingAddress: (shippingAddress: AddressType) => void;
  setBillingAddress: (billingAddress: AddressType) => void;
  setDeliveryMethod: (deliveryMethod: DeliveryMethodType) => void;
}

const DEFAULT_CHECKOUT: CheckoutType = {
  id: '',
  email: '',
  createdAt: '',
  currency: '',
  totalAmount: 0,
  discountAmount: 0,
  discountCode: '',
  lineItems: [],
  shippingAddress: DEFAULT_SHIPPING_ADDRESS,
  billingAddress: {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
  },
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
}));

export { useCheckout };
