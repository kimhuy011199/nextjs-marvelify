import React from 'react';
import {
  SettingCard,
  SettingContent,
  SettingDescription,
  SettingHeading,
} from '@/components/settings';
import OrdersEmpty from '@/components/orders-empty';
import OrdersList from '@/components/orders-list';

const orders = [
  {
    id: '1001',
    orderDate: '2021-09-01',
    status: 'Processing',
    totalPrice: 100,
    subTotal: 90,
    shippingFee: 10,
    discount: 0,
    currency: 'USD',
    estimatedDelivery: '2021-09-10',
    lineItems: [
      {
        id: '1',
        productId: '11',
        createdAt: '01-01-2021',
        name: 'Spiderman Case',
        variant: 'Silver',
        totalPrice: 36,
        quantity: 2,
        price: 18,
        currency: 'USD',
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049345/marvelify/rau45vtlpcbmdfoi6l7s.jpg',
      },
      {
        id: '2',
        productId: '22',
        createdAt: '01-02-2021',
        name: 'Ironman Case',
        variant: 'Black',
        totalPrice: 16,
        quantity: 1,
        price: 16,
        currency: 'USD',
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/qfgbbcrt3tm33bntbyjn.jpg',
      },
    ],
  },
  {
    id: '1002',
    orderDate: '2021-09-01',
    status: 'Delivered',
    totalPrice: 82,
    subTotal: 90,
    shippingFee: 10,
    discount: 0,
    currency: 'USD',
    lineItems: [
      {
        id: '1',
        productId: '11',
        createdAt: '08-04-2022',
        name: 'Black Panther Case',
        variant: 'Silver',
        totalPrice: 60,
        quantity: 3,
        price: 20,
        currency: 'USD',
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/w8fgeakltpciwjlt4wug.jpg',
      },
    ],
  },
];

const Page: React.FC = () => {
  return (
    <SettingCard>
      <SettingHeading>Orders History</SettingHeading>
      <SettingDescription>
        View your previous orders and their status here.
      </SettingDescription>
      <SettingContent>
        {!orders.length ? <OrdersEmpty /> : <OrdersList orders={orders} />}
      </SettingContent>
    </SettingCard>
  );
};

export default Page;
