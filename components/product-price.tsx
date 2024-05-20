import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ProductPriceProps {
  price: number;
  currency: string;
  variant?: 'default' | 'lg';
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
  currency,
  variant = 'default',
}) => {
  const currencySymbol: { [key: string]: string } = {
    usd: '$',
    eur: '$',
  };
  const variantClasses = {
    default: 'font-semibold',
    lg: 'text-3xl font-bold',
  };
  const priceLabel = `${
    currencySymbol[currency.toLocaleLowerCase()]
  }${price.toFixed(2)}`;

  return <span className={variantClasses[variant]}>{priceLabel}</span>;
};

export default ProductPrice;
