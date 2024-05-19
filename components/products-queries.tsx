'use client';

import React from 'react';
import ProductsSort from '@/components/products-sort';
import ProductsFilter from '@/components/products-filter';
import {
  AVAILABILITY_OPTIONS,
  FEAUTES_OPTIONS,
  SEARCH_PARAMS_KEYS,
} from '@/lib/constants';

const ProductsQueries: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
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
    </div>
  );
};

export default ProductsQueries;
