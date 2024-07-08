'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { useCart } from '@/lib/hooks/use-cart';
import { Button } from '@/components/ui/button';
import NonSSRWrapper from '@/components/non-ssr-wrapper';
import { AppStatus } from '@/lib/enums';

const CartTotalQuantityLink: React.FC = () => {
  const cart = useCart();
  const totalQuantity = cart.getTotalQuantity();

  return (
    <NonSSRWrapper>
      <Button
        variant="ghost"
        className="p-2 rounded-md hover:text-primary hover:bg-transparent"
        asChild
      >
        <Link href={ROUTES.CART} className="flex gap-1">
          <ShoppingCart size={20} />
          <div className="w-5 h-5 text-background flex items-center justify-center rounded-full bg-primary">
            {cart.status !== AppStatus.Loading ? (
              <span className="text-xs">{totalQuantity}</span>
            ) : null}
          </div>
        </Link>
      </Button>
    </NonSSRWrapper>
  );
};

export default CartTotalQuantityLink;
