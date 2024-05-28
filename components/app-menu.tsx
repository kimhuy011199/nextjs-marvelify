import React from 'react';
import Link from 'next/link';
import {
  CircleUser,
  Home,
  Menu,
  Search,
  ShoppingCart,
  SquareGanttChart,
} from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface AppMenuLinkProps {
  children: React.ReactNode;
  href: string;
}

const AppMenuLink: React.FC<AppMenuLinkProps> = ({ children, href }) => {
  return (
    <li>
      <SheetClose asChild>
        <Link
          className="flex gap-6 items-center text-2xl font-medium transition-all hover:text-primary"
          href={href}
        >
          {children}
        </Link>
      </SheetClose>
    </li>
  );
};

const AppMenu: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="p-2 rounded-md hover:text-primary hover:bg-transparent"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="flex gap-2 items-center">
            <Menu size={24} />
            <span>MENU</span>
          </SheetTitle>
        </SheetHeader>
        <ul className="h-screen -mt-10 flex flex-col justify-center pl-2 gap-6">
          <AppMenuLink href="/">
            <Home size={24} />
            <span>Home</span>
          </AppMenuLink>
          <AppMenuLink href="/products">
            <SquareGanttChart size={24} />
            <span>Products</span>
          </AppMenuLink>
          <AppMenuLink href="/account">
            <CircleUser size={24} />
            <span>Account</span>
          </AppMenuLink>
          <AppMenuLink href="/search">
            <Search size={24} />
            <span>Search</span>
          </AppMenuLink>
          <AppMenuLink href="/cart">
            <ShoppingCart size={24} />
            <span>Cart</span>
          </AppMenuLink>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default AppMenu;
