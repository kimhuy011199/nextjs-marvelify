import React from 'react';
import ProductCard from '@/components/product-card';

const products = [
  {
    id: 1,
    name: 'Spiderman Case',
    price: 18,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1715957329/phone-natural-case-silver-crop_glhktg.jpg',
  },
  {
    id: 2,
    name: 'Batman Case',
    price: 11,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1715957329/phone-natural-case-silver-crop_glhktg.jpg',
  },
  {
    id: 3,
    name: 'Superman Case',
    price: 18,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1715957329/phone-natural-case-silver-crop_glhktg.jpg',
  },
  {
    id: 4,
    name: 'Ironman Case',
    price: 16,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1715957329/phone-natural-case-silver-crop_glhktg.jpg',
  },
  {
    id: 5,
    name: 'Thor Case',
    price: 14,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1715957329/phone-natural-case-silver-crop_glhktg.jpg',
  },
  {
    id: 6,
    name: 'Hulk Case',
    price: 10,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1715957329/phone-natural-case-silver-crop_glhktg.jpg',
  },
  {
    id: 7,
    name: 'Captain America Case',
    price: 22,
    currency: 'USD',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1715957329/phone-natural-case-silver-crop_glhktg.jpg',
  },
];

const ProductsList: React.FC = () => {
  return (
    <div>
      <ul className="grid grid-cols-4 gap-3">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
