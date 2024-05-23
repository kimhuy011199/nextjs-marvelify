import React from 'react';
import Container from '@/components/container';
import Logo from '@/components/logo';
import AppMenu from '@/components/app-menu';

const Header: React.FC = () => {
  return (
    <div className="border-b py-5 bg-background">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <AppMenu />
        </div>
      </Container>
    </div>
  );
};

export default Header;
