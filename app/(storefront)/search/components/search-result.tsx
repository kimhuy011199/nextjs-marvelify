'use client';

import React from 'react';
import Fuse from 'fuse.js';
import { ProductType } from '@/lib/types';
import ProductsList from '@/components/products/products-list';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchResultProps {
  products: ProductType[];
}

const SearchResult: React.FC<SearchResultProps> = ({ products }) => {
  const [result, setResult] = React.useState<ProductType[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    const fuse = new Fuse(products, {
      keys: ['name'],
      threshold: 0.5,
    });
    const result = fuse.search(value).map((item) => item.item);
    setResult(result);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Search</h1>
      <div className="mt-4 mb-6 relative">
        <Search className="absolute top-[14px] left-4 text-primary" size={20} />
        <Input
          placeholder="What are you looking for?"
          onChange={handleSearch}
          value={searchValue}
          className="text-lg h-12 pl-12 rounded-lg"
        />
      </div>
      <ProductsList products={result} className="grid-cols-3" />
    </div>
  );
};

export default SearchResult;
