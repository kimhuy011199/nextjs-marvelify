const discounts = {
  '5OFF': {
    currency: 'USD',
    value: 5,
    code: '5OFF',
  },
  '10OFF': {
    currency: 'USD',
    value: 10,
    code: '10OFF',
  },
  '12OFF': {
    currency: 'USD',
    value: 12,
    code: '12OFF',
  },
};

const applyDiscount = async (code: string) => {
  const discount = discounts[code as keyof typeof discounts];
  if (!discount) {
    throw new Error('Invalid discount code');
  }
  return discount;
};

export { applyDiscount };
