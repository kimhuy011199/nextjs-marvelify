import React from 'react';
import Container from '@/components/container';
import Logo from '@/components/logo';
import AppMenu from '@/components/app-menu';
import CartTotalQuantityLink from '@/components/cart/cart-total-quantity-link';

const Header: React.FC = () => {
  return (
    <div className="border-b py-5 bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-2">
            <CartTotalQuantityLink />
            <AppMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
