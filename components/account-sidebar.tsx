'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookUser, CircleUserRound, ShoppingBag } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { twMerge } from 'tailwind-merge';

const AccountSidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="min-w-60">
      <h2 className="font-semibold text-muted-foreground pb-3">
        Account Setting
      </h2>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            className={twMerge(
              'py-2 px-3 rounded-lg flex items-center gap-3',
              pathname === ROUTES.ACCOUNT_PROFILE ? 'bg-gray-200' : ''
            )}
            href="/account"
          >
            <CircleUserRound size={18} />
            <span className="font-medium">Profile</span>
          </Link>
        </li>
        <li>
          <Link
            className={twMerge(
              'py-2 px-3 rounded-lg flex items-center gap-3',
              pathname === ROUTES.ACCOUNT_ADDRESSES ? 'bg-gray-200' : ''
            )}
            href="/account/addresses"
          >
            <BookUser size={18} />
            <span className="font-medium">Addresses</span>
          </Link>
        </li>
        <li>
          <Link
            className={twMerge(
              'py-2 px-3 rounded-lg flex items-center gap-3',
              pathname === ROUTES.ACCOUNT_ORDERS ? 'bg-gray-200' : ''
            )}
            href="/account/orders"
          >
            <ShoppingBag size={18} />
            <span className="font-medium">Orders</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
