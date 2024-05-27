import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { twMerge } from 'tailwind-merge';

interface ArrowLinkProps {
  label: string;
  href?: string;
  className?: string;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({
  label,
  href = ROUTES.PRODUCT,
  className,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        'text-primary flex gap-1 items-center group',
        className
      )}
    >
      <span>{label}</span>
      <ArrowUpRight
        size={16}
        className="transition-all group-hover:rotate-45"
      />
    </Link>
  );
};

export default ArrowLink;
