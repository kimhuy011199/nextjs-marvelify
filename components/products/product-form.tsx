'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { set, z } from 'zod';
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
import ProductQuantity from '@/components/products/product-quantity';
import ProductMaxQuantity from '@/components/products/product-max-quantity';
import Money from '@/components/money';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { ROUTES } from '@/lib/constants';
import { ProductType } from '@/lib/types';
import { useCart } from '@/lib/hooks/use-cart';

interface ProductFormProps {
  product: ProductType;
}

const formSchema = z.object({
  variantName: z.string(),
});

const ProductForm: React.FC<ProductFormProps> = ({ product }) => {
  const [mounted, setMounted] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const { toast } = useToast();
  const cart = useCart();
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

  const currentVariantQuantityInCart = cart.getQuantity(currentVariant.id);
  const isDisabledAddToCart =
    currentVariantQuantityInCart + quantity > currentVariant.availableQuantity;
  const limitedQuantity =
    currentVariant.availableQuantity - currentVariantQuantityInCart;

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (isDisabledAddToCart) {
      return;
    }
    cart.addItem({
      productVariantId: currentVariant.id,
      productVariant: currentVariant,
      quantity,
    });
    setQuantity(1);
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

  useEffect(() => {
    setQuantity(1);
  }, [currentVariant.id]);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
      <div className="lg:col-span-3 border border-accent rounded-2xl bg-white p-16 flex justify-center items-center">
        <div className="w-full max-w-60">
          <Image
            src={currentVariant.previewImg}
            width={540}
            height={1040}
            alt={product.name}
          />
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-accent-foreground text-sm">
            {product.description}
          </p>
          <Money
            amount={currentVariant.discountedPrice}
            originalAmount={currentVariant.price}
            currency={currentVariant.currency}
            className="text-2xl font-bold"
          />
          <Divider />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleAddToCart)}
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
              limit={limitedQuantity}
              className="self-start"
            />
            {!currentVariant.availableQuantity ? (
              <Button size="lg" type="button" disabled>
                Sold out
              </Button>
            ) : (
              <Button size="lg" type="submit" disabled={isDisabledAddToCart}>
                Add to cart
              </Button>
            )}
            {isDisabledAddToCart && currentVariant.availableQuantity ? (
              <ProductMaxQuantity />
            ) : null}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProductForm;
