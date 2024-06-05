import { OrderType } from '@/lib/types';
import delay from 'delay';

const orders: OrderType[] = [
  {
    id: '1001',
    orderDate: '2024-05-05',
    status: 'Processing',
    email: 'huynguyen@mail.com',
    currency: 'USD',
    total: 55,
    subTotal: 40,
    discount: {
      value: 0,
      code: '',
      currency: 'USD',
    },
    lineItems: [
      {
        productVariantId: '0201',
        productVariant: {
          id: '0201',
          productHandle: 'ironman-case',
          productName: 'Ironman Case',
          name: 'Silver',
          price: 22,
          priceAfterDiscounted: 20,
          currency: 'USD',
          availableQuantity: 45,
          previewImg:
            'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/qfgbbcrt3tm33bntbyjn.jpg',
        },
        quantity: 2,
      },
    ],
    shippingAddress: {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      address2: 'Apt 4B',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'US',
    },
    billingAddress: {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      address2: 'Apt 4B',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'US',
    },
    deliveryMethod: {
      id: 'expedited',
      name: 'Marvel Express Expedited',
      price: 15,
      currency: 'USD',
      estimatedDelivery: 'Next 3 days',
    },
    paymentMethod: {
      name: 'Cash on Delivery',
      id: 'cod',
      description: 'Pay with cash when your order is delivered to you.',
      price: 20,
      currency: 'USD',
    },
  },
  {
    id: '1002',
    orderDate: '2024-05-06',
    status: 'Delivered',
    email: 'huynguyen@mail.com',
    currency: 'USD',
    total: 54,
    subTotal: 44,
    discount: {
      value: 10,
      code: '10OFF',
      currency: 'USD',
    },
    lineItems: [
      {
        productVariantId: '1201',
        productVariant: {
          id: '1201',
          productHandle: 'moon-knight-case',
          productName: 'Moon Knight Case',
          name: 'Silver',
          price: 15,
          priceAfterDiscounted: 12,
          currency: 'USD',
          availableQuantity: 40,
          previewImg:
            'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/ygoy2nphq53y82jkjsbq.jpg',
        },
        quantity: 2,
      },
      {
        productVariantId: '0201',
        productVariant: {
          id: '0201',
          productHandle: 'ironman-case',
          productName: 'Ironman Case',
          name: 'Silver',
          price: 22,
          priceAfterDiscounted: 20,
          currency: 'USD',
          availableQuantity: 45,
          previewImg:
            'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/qfgbbcrt3tm33bntbyjn.jpg',
        },
        quantity: 1,
      },
    ],
    shippingAddress: {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      address2: 'Apt 4B',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'US',
    },
    billingAddress: {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      address2: 'Apt 4B',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'US',
    },
    deliveryMethod: {
      name: 'Marvel Express Premium',
      id: 'premium',
      price: 20,
      currency: 'USD',
      estimatedDelivery: 'Tomorrow',
    },
    paymentMethod: {
      name: 'Cash on Delivery',
      id: 'cod',
      description: 'Pay with cash when your order is delivered to you.',
      price: 20,
      currency: 'USD',
    },
  },
];

const getOrders = async (): Promise<OrderType[]> => {
  await delay(2000);
  return orders;
};

const getOrderById = async (
  orderId: string
): Promise<OrderType | undefined> => {
  await delay(2000);
  return orders.find((order) => order.id === orderId);
};

export { getOrders, getOrderById };
