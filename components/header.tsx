import React from 'react';
import Container from '@/components/container';
import Logo from '@/components/logo';
import AppMenu from '@/components/app-menu';
import CartTotalQuantityLink from '@/components/cart/cart-total-quantity-link';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { CircleUser, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="border-b py-5 bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              className="p-2 rounded-md hover:text-primary hover:bg-transparent"
            >
              <Link href={ROUTES.SEARCH}>
                <Search size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="p-2 rounded-md hover:text-primary hover:bg-transparent"
            >
              <Link href={ROUTES.ACCOUNT_PROFILE}>
                <CircleUser size={20} />
              </Link>
            </Button>
            <CartTotalQuantityLink />
            <AppMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
