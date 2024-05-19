'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';
import { SEARCH_PARAMS_KEYS, SORT_OPTIONS } from '@/lib/constants';

const ProductsSort: React.FC = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const defaultValue =
    searchParams.get(SEARCH_PARAMS_KEYS.SORT) || SORT_OPTIONS[0].value;

  const handleValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(SEARCH_PARAMS_KEYS.SORT, value);
    } else {
      params.delete(SEARCH_PARAMS_KEYS.SORT);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium text-muted-foreground">Sort by</span>
      <div>
        <Select defaultValue={defaultValue} onValueChange={handleValueChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {SORT_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductsSort;
