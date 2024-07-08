export const ROUTES = {
  HOME: '/',
  PRODUCT: '/products',
  ACCOUNT_PROFILE: '/account',
  ACCOUNT_ADDRESSES: '/account/addresses',
  ACCOUNT_ORDERS: '/account/orders',
  CART: '/cart',
  CHECKOUT: '/checkout',
  SEARCH: '/search',
  THANK_YOU: '/orders/confirmed',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  AUTH: '/auth',
};

export const API_ENDPOINTS = {
  CART: '/api/cart',
};

export const CHECKOUT_STEPS = {
  ADDRESS: 'address',
  DELIVERY: 'delivery',
  PAYMENT: 'payment',
};

export const SEARCH_PARAMS_KEYS = {
  SORT: 'sort',
  AVAILABILITY: 'availability',
  FEATURE: 'feature',
  PAGE: 'page',
};

export const SORT_OPTIONS = [
  { label: 'Latest Arrivals', value: 'latest' },
  { label: 'Price: High - Low', value: 'highest' },
  { label: 'Price: Low - High', value: 'lowest' },
];

export const AVAILABILITY_OPTIONS = [
  { label: 'In stock', value: 'in' },
  { label: 'Out of stock', value: 'out' },
];

export const FEAUTES_OPTIONS = [
  { label: 'MagSafe compatibility', value: 'magsafe' },
  { label: 'Wireless charging', value: 'wireless' },
  { label: 'Shockproof protection', value: 'shockproof' },
];

export const COUNTRY_OPTIONS = [
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'UK' },
  { label: 'Vietnam', value: 'VN' },
];

export const DELIVERY_METHOD_OPTIONS = [
  {
    name: 'Marvel Express Standard',
    id: 'standard',
    price: 10,
    currency: 'USD',
    estimatedDelivery: 'Next 5 days',
  },
  {
    name: 'Marvel Express Expedited',
    id: 'expedited',
    price: 15,
    currency: 'USD',
    estimatedDelivery: 'Next 3 days',
  },
  {
    name: 'Marvel Express Premium',
    id: 'premium',
    price: 20,
    currency: 'USD',
    estimatedDelivery: 'Tomorrow',
  },
];

export const PAYMENT_METHOD_OPTIONS = [
  {
    name: 'Cash on Delivery',
    id: 'cod',
    description: 'Pay with cash when your order is delivered to you.',
  },
];

export const DEFAULT_SHIPPING_ADDRESS = {
  id: '',
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  postalCode: '',
  province: '',
  country: COUNTRY_OPTIONS[0].value,
};

export const EXAMPLE_ADDRESSES = [
  {
    id: 'a61a8669-8876-4a17-a19d-5c5bfba288a3',
    firstName: 'John',
    lastName: 'Doe',
    address1: '123 Main St',
    address2: 'Apt 4B',
    city: 'New York',
    province: 'NY',
    postalCode: '10001',
    country: 'US',
  },
  {
    id: '93370cfe-6c25-4c53-86ab-6fdf7a668806',
    firstName: 'Jane',
    lastName: 'Smith',
    address1: '456 Elm St',
    address2: '',
    city: 'Los Angeles',
    province: '',
    postalCode: '90001',
    country: 'US',
  },
];

export const DEFAULT_EMAIL = 'kimhuy011199@gmail.com';

export const PERSONAL_LINKS = {
  GITHUB: 'https://github.com/kimhuy011199/nextjs-marvelify',
};
