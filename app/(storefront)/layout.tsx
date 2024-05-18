import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';

interface StorefrontLayoutProps {
  children: React.ReactNode;
}

const StorefrontLayout: React.FC<StorefrontLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default StorefrontLayout;
