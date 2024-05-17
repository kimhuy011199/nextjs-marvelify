import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    currency: string;
    previewImg: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-200 shadow-sm rounded-2xl bg-white transition-all hover:shadow hover:border-gray-300">
      <Link href={`/products/${product.id}`}>
        <div className="p-6 pb-3 lg:p-10 lg:pt-8 lg:pb-4">
          <Image
            src={product.previewImg}
            width={540}
            height={1040}
            alt={product.name}
          />
        </div>
        <div className="py-4 px-5">
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-muted-foreground">
            {product.price} {product.currency}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
