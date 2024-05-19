import React from 'react';
import Container from '@/components/container';
import CartEmpty from '@/components/cart-empty';
import CartLines from '@/components/cart-lines';
import CartSummary from '@/components/cart-summary';

// const cart = {
//   items: [],
// };

const cart = {
  items: [
    {
      id: '1',
      name: 'Spiderman Case',
      variant: 'Silver',
      price: 20,
      currency: 'USD',
      previewImg:
        'https://res.cloudinary.com/cloudinaryassets/image/upload/v1715957329/phone-natural-case-silver-crop_glhktg.jpg',
      quantity: 1,
    },
    {
      id: '2',
      name: 'Spiderman Case',
      variant: 'Black',
      price: 30,
      currency: 'USD',
      previewImg:
        'https://res.cloudinary.com/cloudinaryassets/image/upload/v1715957329/phone-natural-case-silver-crop_glhktg.jpg',
      quantity: 2,
    },
  ],
};

const Page: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        {cart.items.length ? (
          <div className="flex gap-12 items-start">
            <CartLines cart={cart} />
            <CartSummary />
          </div>
        ) : (
          <CartEmpty />
        )}
      </Container>
    </section>
  );
};

export default Page;