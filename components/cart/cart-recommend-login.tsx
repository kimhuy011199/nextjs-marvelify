import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';

const CartRecommendLogin: React.FC = () => {
  return (
    <div className="py-2 flex items-center text-accent-foreground gap-1.5">
      <span>Already have an account?</span>
      <Button asChild variant="link" className="p-0 text-base">
        <Link href={ROUTES.LOGIN}>Login</Link>
      </Button>
      <span>for a better experience.</span>
    </div>
  );
};

export default CartRecommendLogin;
