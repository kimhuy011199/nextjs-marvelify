'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { logout } from '@/lib/actions/authentication';
import { useCheckout } from '@/lib/hooks/use-checkout';
import { useUser } from '@/lib/hooks/use-user';
import { useCart } from '@/lib/hooks/use-cart';

const LogoutButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const checkoutState = useCheckout();
  const userState = useUser();
  const cartState = useCart();

  const handleLogout = async () => {
    setIsLoading(true);
    await logout();
    checkoutState.clear();
    cartState.clear();
    userState.clear();
    setIsLoading(false);
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      className="bg-white mt-2 self-start flex gap-1.5 px-3 hover:text-foreground w-28"
      isLoading={isLoading}
      disabled={isLoading}
    >
      <LogOut size={14} />
      <span>Log out</span>
    </Button>
  );
};

export default LogoutButton;
