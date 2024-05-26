import React, { useEffect } from 'react';
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

  const form = useForm({
    defaultValues: {
      items: defaultValue,
    },
  });
  const filterValues = form.watch('items');

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
    replace(`${pathname}?${params.toString()}`);
  }, [filterValues, pathname, replace, searchParams, filterKey]);

  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium">{title}</span>
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="items"
            render={() => (
              <FormItem>
                {options.map((item) => (
                  <FormField
                    key={item.value}
                    control={form.control}
                    name="items"
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
