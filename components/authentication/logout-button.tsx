'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { logout } from '@/lib/actions/authentication';
import { useCheckout } from '@/lib/hooks/use-checkout';

const LogoutButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const checkoutState = useCheckout();

  const handleLogout = async () => {
    setIsLoading(true);
    // Clear checkout state of old user
    checkoutState.clear();
    await logout();
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
