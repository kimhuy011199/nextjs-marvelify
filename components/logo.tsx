import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src="/logo-sm.png" alt="Logo" width={138} height={30} />
    </Link>
  );
};

export default Logo;
