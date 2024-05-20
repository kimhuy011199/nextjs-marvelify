import React from 'react';
import Container from '@/components/container';
import ProductForm from '@/components/product-form';
import ProductsList from '@/components/products-list';

const product = {
  id: 1,
  name: 'Spiderman Case',
  description:
    'Made with high-quality materials, it provides excellent protection against scratches and drops. The case features a sleek design with the iconic Spiderman logo, making it a must-have for any Spiderman fan.',
  price: 18,
  currency: 'USD',
  collection: 'Spiderman Collection',
  previewImg:
    'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049345/marvelify/rau45vtlpcbmdfoi6l7s.jpg',
  variants: [
    {
      id: '1',
      name: 'Silver',
      price: 20,
      currency: 'USD',
      previewImg:
        'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049345/marvelify/rau45vtlpcbmdfoi6l7s.jpg',
    },
    {
      id: '2',
      name: 'Black',
      price: 19,
      currency: 'USD',
      previewImg:
        'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049344/marvelify/a0eopcgdy1ne3ctvur0f.jpg',
    },
  ],
};

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <section className="bg-gray-50 py-20">
        <Container>
          <ProductForm product={product} />
        </Container>
      </section>
      {/* <section className="py-20">
        <Container>
          <ProductsList />
        </Container>
      </section> */}
    </>
  );
};

export default Page;
