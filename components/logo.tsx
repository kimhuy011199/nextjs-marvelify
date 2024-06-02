import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/constants';

const Logo: React.FC = () => {
  return (
    <Link href={ROUTES.HOME}>
      <Image
        src="/logo-sm.png"
        alt="Logo"
        width={890}
        height={200}
        className="w-[138px]"
      />
    </Link>
  );
};

export default Logo;
