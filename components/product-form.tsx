'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, VariantRadioGroupItem } from '@/components/ui/radio-group';
import Divider from '@/components/divider';
import Image from 'next/image';
import ProductQuantity from '@/components/product-quantity';
import ProductPrice from '@/components/product-price';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { ROUTES } from '@/lib/constants';

interface ProductFormProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    previewImg: string;
    collection: string;
    variants: {
      id: string;
      name: string;
      previewImg: string;
      price: number;
      currency: string;
    }[];
  };
}

const formSchema = z.object({
  variantName: z.string(),
});

const ProductForm: React.FC<ProductFormProps> = ({ product }) => {
  const [quantity, setQuantity] = React.useState(1);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variantName: product.variants[0].name || '',
    },
  });

  const currentVariant =
    product.variants.find(
      (variant) => variant.name === form.getValues('variantName')
    ) || product.variants[0];

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const onSubmit = () => {
    console.log('currentVariant', currentVariant);
    console.log('quantity', quantity);
    toast({
      title: `Added ${product.name}`,
      description: 'Color: ' + currentVariant.name + ' - Quantity: ' + quantity,
      action: (
        <ToastAction
          altText="Go to cart"
          onClick={() => router.push(ROUTES.CART)}
        >
          Go to Cart
        </ToastAction>
      ),
    });
  };

  return (
    <div className="grid grid-cols-5 gap-16 items-center">
      <div className="col-span-3 border border-gray-200 shadow-sm rounded-2xl bg-white p-16 flex justify-center items-center">
        <div className="w-full max-w-60">
          <Image
            src={currentVariant.previewImg}
            width={540}
            height={1040}
            alt={product.name}
          />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-muted-foreground text-sm">{product.description}</p>
          <ProductPrice
            variant="lg"
            price={currentVariant.price}
            currency={currentVariant.currency}
          />
          <Divider />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 pt-4"
          >
            <FormField
              control={form.control}
              name="variantName"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-base">Choose a color</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-6 pl-2 pt-1"
                    >
                      {product.variants.map((variant) => (
                        <FormItem
                          key={variant.id}
                          className="flex flex-col items-center"
                        >
                          <FormControl>
                            <VariantRadioGroupItem value={variant.name} />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {variant.name}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Divider />
            <ProductQuantity
              handleQuantityChange={handleQuantityChange}
              quantity={quantity}
              className="self-start"
            />
            <Button size={'lg'} type="submit">
              Add to cart
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProductForm;
