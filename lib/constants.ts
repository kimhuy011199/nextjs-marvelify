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

export const PERSONAL_LINKS = {
  GITHUB: 'https://github.com/kimhuy011199/nextjs-marvelify',
};
