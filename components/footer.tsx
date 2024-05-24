import React from 'react';
import Link from 'next/link';
import Container from '@/components/container';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <div className="border-t pt-16 bg-background">
      <Container>
        <div className="flex flex-col w-full max-w-3xl ">
          <Logo />
          <p className="text-muted-foreground my-5">
            Marvel Caseshop is a e-commerce store built with Next.js. This demo
            store is an open-source project. If you like this project, please
            give me a star on
            <Link
              className="text-foreground underline pl-1.5"
              href="https://github.com/kimhuy011199/nextjs-marvelify"
            >
              Github
            </Link>
            .
          </p>
          <ul className="flex gap-8 mb-4 items-center">
            <li className="uppercase font-medium">Useful Links:</li>
            <li>
              <Button asChild variant="link" className="p-0 text-base">
                <Link href="/account">Account</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-0 text-base">
                <Link href="/products">Products</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link" className="p-0 text-base">
                <Link href="/search">Search</Link>
              </Button>
            </li>
          </ul>
        </div>
        <div className="flex justify-between py-4 border-t">
          <span className="text-muted-foreground text-sm">
            © 2024 Marvelify. All rights reserved.
          </span>
          <ul></ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
