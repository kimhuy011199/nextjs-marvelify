'use client';

import React from 'react';
import ProductsSort from '@/components/products/products-sort';
import ProductsFilter from '@/components/products/products-filter';
import { Button } from '@/components/ui/button';
import {
  AVAILABILITY_OPTIONS,
  FEAUTES_OPTIONS,
  SEARCH_PARAMS_KEYS,
} from '@/lib/constants';
import { X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { ProductSearchParamsInterface } from '@/lib/data/products';

interface ProductsQueriesProps {
  searchParams: ProductSearchParamsInterface | undefined;
}

const ProductsQueries: React.FC<ProductsQueriesProps> = ({ searchParams }) => {
  const router = useRouter();
  const pathname = usePathname();

  const showClearFilters =
    Object.keys(searchParams ?? {}).length > 1 ||
    Object.values(searchParams ?? {}).some((value) => value !== '');

  const handleClearFilters = () => {
    const searchParams = new URLSearchParams('');
    searchParams.append('', '');
    router.replace(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div>
      <p className="text-xl font-medium mb-4">Filtering Products:</p>
      <div className="flex flex-col gap-4">
        <ProductsSort key={searchParams?.sort || SEARCH_PARAMS_KEYS.SORT} />
        <ProductsFilter
          key={
            SEARCH_PARAMS_KEYS.AVAILABILITY + searchParams?.availability?.length
          }
          filterKey={SEARCH_PARAMS_KEYS.AVAILABILITY}
          options={AVAILABILITY_OPTIONS}
          title="Availability"
        />
        <ProductsFilter
          key={SEARCH_PARAMS_KEYS.FEATURE + searchParams?.feature?.length}
          filterKey={SEARCH_PARAMS_KEYS.FEATURE}
          options={FEAUTES_OPTIONS}
          title="Features"
        />
        {showClearFilters ? (
          <Button
            variant="outline"
            onClick={handleClearFilters}
            className="bg-white mt-2 self-start flex gap-1.5 px-3 hover:text-foreground"
          >
            <X size={14} />
            <span>Clear</span>
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default ProductsQueries;
