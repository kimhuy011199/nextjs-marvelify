'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { SEARCH_PARAMS_KEYS } from '@/lib/constants';
import { sortQueryParams } from '@/lib/utils';

interface ProductsFilterProps {
  filterKey: string;
  options: {
    label: string;
    value: string;
  }[];
  title: string;
}

const ProductsFilter: React.FC<ProductsFilterProps> = ({
  filterKey,
  options,
  title,
}) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const defaultValue = searchParams.getAll(filterKey) || [];
  const [hasChanged, setHasChanged] = useState(false);

  const form = useForm({
    defaultValues: {
      [filterKey]: defaultValue,
    },
  });
  const filterValues = form.watch(filterKey);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (filterValues.length) {
      params.delete(filterKey);
      for (const value of filterValues) {
        params.append(filterKey, value);
      }
    } else {
      params.delete(filterKey);
    }

    // Remove page query param if filter values have changed
    if (hasChanged) {
      params.delete(SEARCH_PARAMS_KEYS.PAGE);
    }

    const sortedParams = sortQueryParams(params);
    replace(`${pathname}?${sortedParams.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValues.length]);

  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium">{title}</span>
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name={filterKey}
            render={() => (
              <FormItem>
                {options.map((item) => (
                  <FormField
                    key={item.value}
                    control={form.control}
                    name={filterKey}
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.value}
                          className="flex flex-row items-center space-x-2.5 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.value)}
                              onCheckedChange={(checked) => {
                                setHasChanged(true);
                                checked
                                  ? field.onChange([...field.value, item.value])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.value
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-base text-accent-foreground">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default ProductsFilter;
