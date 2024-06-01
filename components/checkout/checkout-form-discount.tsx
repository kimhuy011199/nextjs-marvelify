'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { applyDiscount } from '@/lib/data/discount';
import { DiscountType } from '@/lib/types';
import { CircleCheckBig, TriangleAlert, X } from 'lucide-react';
import { useCheckout } from '@/lib/hooks/use-checkout';

const CheckoutFormDiscount: React.FC = () => {
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState<DiscountType>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const checkoutState = useCheckout();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(e.target.value);
  };

  const handleClearDiscount = () => {
    setDiscount(undefined);
    setDiscountCode('');
    checkoutState.clearDiscount();
    checkoutState.calculateTotal();
  };

  const handleApplyDiscount = async () => {
    setLoading(true);
    setError(undefined);
    setDiscount(undefined);
    checkoutState.clearDiscount();
    try {
      const discount = await applyDiscount(discountCode);
      setDiscount(discount);
      checkoutState.setDiscount(discount);
      checkoutState.calculateTotal();
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-4">
        <Input
          value={discountCode}
          onChange={handleChangeValue}
          placeholder="Enter discount code"
        />
        <Button
          disabled={!discountCode || loading}
          onClick={handleApplyDiscount}
        >
          Apply
        </Button>
      </div>
      <div>
        {error ? (
          <div className="flex items-center gap-2 pt-3 text-destructive">
            <TriangleAlert size={16} />
            <span>{error}</span>
          </div>
        ) : null}
        {discount?.value ? (
          <div className="flex items-center gap-2 pt-3">
            <CircleCheckBig size={16} className="text-green-600" />
            Applied code:
            <span className="font-semibold">{discount.code}</span>
            <Button variant="outline" className="h-auto p-1 ml-1">
              <X size={16} onClick={handleClearDiscount} />
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CheckoutFormDiscount;
