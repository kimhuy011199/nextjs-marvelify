import React from 'react';
import { twMerge } from 'tailwind-merge';

interface MoneyProps {
  amount: number;
  currency?: string;
  originalAmount?: number;
  className?: string;
}

const DEFAULT_CURRENCY = 'USD';
const DEFAULT_AMOUNT = 0;

const Money: React.FC<MoneyProps> = ({
  amount = DEFAULT_AMOUNT,
  currency = DEFAULT_CURRENCY,
  originalAmount = DEFAULT_AMOUNT,
  className,
}) => {
  const currencySymbol: { [key: string]: string } = {
    usd: '$',
    eur: '$',
  };

  const priceLabel = `${
    currencySymbol[currency.toLocaleLowerCase()]
  }${amount.toFixed(2)}`;

  const originalPrice = `${
    currencySymbol[currency.toLocaleLowerCase()]
  }${originalAmount.toFixed(2)}`;

  return (
    <div className={twMerge('text-lg font-semibold flex gap-2', className)}>
      {originalAmount && originalAmount !== amount ? (
        <span className="text-muted-foreground line-through">
          {originalPrice}
        </span>
      ) : null}
      <span>{priceLabel}</span>
    </div>
  );
};

export default Money;
