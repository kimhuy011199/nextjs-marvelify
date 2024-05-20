import React from 'react';
import Container from '@/components/container';
import ProductsList from '@/components/products-list';
import ProductsQueries from '@/components/products-queries';

const products = [
  {
    id: 1,
    createdAt: '01-01-2021',
    name: 'Spiderman Case',
    price: 18,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049345/marvelify/rau45vtlpcbmdfoi6l7s.jpg',
  },
  {
    id: 2,
    createdAt: '01-02-2021',
    name: 'Ironman Case',
    price: 16,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/qfgbbcrt3tm33bntbyjn.jpg',
  },
  {
    id: 3,
    createdAt: '11-08-2021',
    name: 'Loki Case',
    price: 18,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/awmwjyaorx2gqhtxzilq.jpg',
  },
  {
    id: 4,
    createdAt: '05-03-2021',
    name: 'Black Panther Case',
    price: 14,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/w8fgeakltpciwjlt4wug.jpg',
  },
  {
    id: 5,
    createdAt: '05-04-2021',
    name: 'Thanos Case',
    price: 16,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136083/marvelify/wkmvgcz9atudvmffjjmd.jpg',
  },
  {
    id: 6,
    createdAt: '05-03-2021',
    name: 'Captain Marvel Case',
    price: 14,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136083/marvelify/yo1wuufz643je7bksoxg.jpg',
  },
  {
    id: 7,
    createdAt: '01-03-2021',
    name: 'The Falcon Case',
    price: 20,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136083/marvelify/tgjawqmgtyk1roqubbiw.jpg',
  },
  {
    id: 8,
    createdAt: '05-05-2021',
    name: 'Thor Case',
    price: 15,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136082/marvelify/pli28hungwrlypojzxdi.jpg',
  },
  {
    id: 9,
    createdAt: '05-03-2021',
    name: 'Captain America Case',
    price: 14,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136082/marvelify/xjqv98p7d6uwrfev5seg.jpg',
  },
  {
    id: 10,
    createdAt: '05-08-2021',
    name: 'Captain America Case',
    price: 18,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136081/marvelify/t4zmzrsqhs3wld48khig.jpg',
  },
  {
    id: 11,
    createdAt: '05-03-2021',
    name: 'Black Widow Case',
    price: 14,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136081/marvelify/yr2cfbid9p1knphshg81.jpg',
  },
  {
    id: 12,
    createdAt: '05-03-2021',
    name: 'Moon Knight Case',
    price: 10,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136081/marvelify/ygoy2nphq53y82jkjsbq.jpg',
  },
  {
    id: 13,
    createdAt: '05-03-2021',
    name: 'Hawkeye Case',
    price: 19,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136080/marvelify/zalmbvrlfqr1dxnirwfo.jpg',
  },
  {
    id: 14,
    createdAt: '05-03-2021',
    name: 'Ant Man Case',
    price: 12,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136080/marvelify/vedr2zh54dvdt4kyr8ek.jpg',
  },
];

const Page: React.FC = ({
  searchParams,
}: {
  searchParams?: {
    sort?: string;
    availability?: string | string[];
    feature?: string | string[];
  };
}) => {
  console.log('searchParams', searchParams);
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="grid grid-cols-4 gap-10">
          <ProductsQueries />
          <div className="col-span-3">
            <ProductsList products={products} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
