import React from 'react';
import Container from '@/components/container';
import Image from 'next/image';

const product = {
  id: 1,
  name: 'Spiderman Case',
  price: 18,
  currency: 'USD',
  collection: 'Spiderman Collection',
  previewImg:
    'https://res.cloudinary.com/cloudinaryassets/image/upload/v1715957329/phone-natural-case-silver-crop_glhktg.jpg',
};

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="grid grid-cols-3 gap-16 items-center">
          <div className="border border-gray-200 shadow-sm rounded-2xl col-span-2 bg-white p-16 flex justify-center items-center">
            <div className="w-full max-w-60">
              <Image
                src={product.previewImg}
                width={540}
                height={1040}
                alt={product.name}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground">{product.collection}</p>
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-2xl font-bold">
              {product.price} {product.currency}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
