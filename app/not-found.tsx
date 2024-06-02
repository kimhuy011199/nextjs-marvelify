import React from 'react';
import Link from 'next/link';
import ArrowLink from '@/components/arrow-link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { PERSONAL_LINKS, ROUTES } from '@/lib/constants';

const NotFound: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-10 items-center justify-center">
      <Logo />
      <h1 className="text-5xl font-semibold">404 - Not Found</h1>
      <p className="text-accent-foreground">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="flex gap-2">
        <Button>
          <ArrowLink
            label="Go to Home"
            href={ROUTES.HOME}
            className="text-white"
          />
        </Button>
        <Button variant="outline" className="bg-white hover:text-foreground">
          <Link href={PERSONAL_LINKS.GITHUB}>View on Github</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
