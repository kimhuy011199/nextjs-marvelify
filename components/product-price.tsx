import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ProductPriceProps {
  price: number;
  currency: string;
  variant?: 'default' | 'md' | 'lg';
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
    md: 'text-xl font-bold',
    lg: 'text-3xl font-bold',
  };
  const priceLabel = `${
    currencySymbol[currency.toLocaleLowerCase()]
  }${price.toFixed(2)}`;

  return <span className={variantClasses[variant]}>{priceLabel}</span>;
};

export default ProductPrice;
