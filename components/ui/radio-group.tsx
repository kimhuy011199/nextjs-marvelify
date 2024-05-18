'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const VariantRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  const variantColor: { [key: string]: string } = {
    silver: 'fill-gray-300 text-gray-300',
    black: 'fill-black text-black',
  };
  const colorClass = variantColor[props.value.toLocaleLowerCase()];

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className="w-8 h-8 rounded-full flex items-center justify-center relative"
      {...props}
    >
      <Circle className={twMerge('h-6 w-6', colorClass)} />
      <RadioGroupPrimitive.Indicator className="absolute top-[-1px] left-[-1px] bottom-[-1px] right-[-1px] rounded-full border-2 border-primary"></RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
VariantRadioGroupItem.displayName = 'VariantRadioGroupItem';

export { RadioGroup, RadioGroupItem, VariantRadioGroupItem };
