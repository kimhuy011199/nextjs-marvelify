import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Money from '@/components/money';
import { ProductType } from '@/lib/types';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-accent rounded-2xl bg-white">
      <Link href={`/products/${product.handle}`}>
        <div className="p-6 pb-3 lg:p-12 lg:py-8 lg:pb-4">
          <Image
            src={product.previewImg}
            width={540}
            height={1040}
            alt={product.name}
          />
        </div>
        <div className="py-4 px-5">
          <h3 className="font-medium">{product.name}</h3>
          <Money
            amount={product.variants[0].priceAfterDiscounted}
            originalAmount={product.variants[0].price}
            currency={product.variants[0].currency}
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
