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

const ProductsQueries: React.FC = () => {
  const handleClearFilters = () => {};

  return (
    <div>
      <p className="text-xl font-medium mb-4">Filtering Products:</p>
      <div className="flex flex-col gap-4">
        <ProductsSort />
        <ProductsFilter
          filterKey={SEARCH_PARAMS_KEYS.AVAILABILITY}
          options={AVAILABILITY_OPTIONS}
          title="Availability"
        />
        <ProductsFilter
          filterKey={SEARCH_PARAMS_KEYS.FEATURE}
          options={FEAUTES_OPTIONS}
          title="Features"
        />
        <Button
          variant="outline"
          onClick={handleClearFilters}
          className="bg-white mt-2 self-start flex gap-1.5 px-3 hover:text-foreground"
        >
          <X size={14} />
          <span>Clear</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductsQueries;
