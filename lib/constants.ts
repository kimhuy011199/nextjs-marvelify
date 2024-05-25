export const ROUTES = {
  HOME: '/',
  PRODUCT: '/products',
  ACCOUNT_PROFILE: '/account',
  ACCOUNT_ADDRESSES: '/account/addresses',
  ACCOUNT_ORDERS: '/account/orders',
  CART: '/cart',
  CHECKOUT: '/checkout',
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
  { label: 'Wireless charging', value: 'wifi' },
  { label: 'Shockproof protection', value: 'shockproof' },
];
