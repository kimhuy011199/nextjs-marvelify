import React from 'react';
import { getAllProducts } from '@/lib/data/products';
import SearchResult from './search-result';

const SearchContainer: React.FC = async () => {
  const products = await getAllProducts();

  return (
    <div>
      <SearchResult products={products} />
    </div>
  );
};

export default SearchContainer;
