'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const LogoutButton: React.FC = () => {
  const handleLogout = () => {};

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      className="bg-white mt-2 self-start flex gap-1.5 px-3 hover:text-foreground w-28"
    >
      <LogOut size={14} />
      <span>Log out</span>
    </Button>
  );
};

export default LogoutButton;
