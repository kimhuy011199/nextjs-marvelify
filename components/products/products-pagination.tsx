'use client';

import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SEARCH_PARAMS_KEYS } from '@/lib/constants';
import { twMerge } from 'tailwind-merge';
import { sortQueryParams } from '@/lib/utils';

interface ProductsPaginationProps {
  totalPages: number;
}

const ProductsPagination: React.FC<ProductsPaginationProps> = ({
  totalPages,
}) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const defaultValue = searchParams.get(SEARCH_PARAMS_KEYS.PAGE) || '1';

  const handleValueChange = (value: number) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(SEARCH_PARAMS_KEYS.PAGE, value.toString());
    } else {
      params.delete(SEARCH_PARAMS_KEYS.PAGE);
    }
    const sortedParams = sortQueryParams(params);
    replace(`${pathname}?${sortedParams.toString()}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              className={twMerge(
                'hover:text-foreground',
                index + 1 === parseInt(defaultValue)
                  ? 'cursor-not-allowed'
                  : 'cursor-pointer'
              )}
              onClick={() => handleValueChange(index + 1)}
              isActive={index + 1 === parseInt(defaultValue)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default ProductsPagination;
