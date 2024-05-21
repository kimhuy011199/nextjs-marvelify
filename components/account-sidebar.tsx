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
    <div className="min-w-60 h-60 border border-gray-200 shadow-sm rounded-2xl bg-white pb-4">
      <h2 className="font-semibold pt-5 pb-4 px-6 text-lg">Account Setting</h2>
      <ul className="flex flex-col">
        <li>
          <Link
            className={twMerge(
              'flex items-center gap-3 py-2.5 px-6 transition-all hover:bg-gray-100 border-l-2 border-transparent',
              pathname === ROUTES.ACCOUNT_PROFILE
                ? 'text-primary border-l-primary'
                : ''
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
              'flex items-center gap-3 py-2.5 px-6 transition-all hover:bg-gray-100 border-l-2 border-transparent',
              pathname === ROUTES.ACCOUNT_ADDRESSES
                ? 'text-primary border-l-primary'
                : ''
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
              'flex items-center gap-3 py-2.5 px-6 transition-all hover:bg-gray-100 border-l-2 border-transparent',
              pathname === ROUTES.ACCOUNT_ORDERS
                ? 'text-primary border-l-primary'
                : ''
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
