'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/lib/schema/authentication';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { login } from '@/lib/actions/authentication';
import { useMutation } from '@tanstack/react-query';

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate: loginUser } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onError: (error) => {
      setIsLoading(false);
      // Handle error on email field
      form.setError('email', {
        message: error.message,
      });
      form.setFocus('email');
      // Handle server error
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setIsLoading(true);
    loginUser(data);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col px-6">
      <div className="pb-4 flex flex-col gap-2">
        <h1 className="text-center text-3xl font-semibold">Welcome back!</h1>
        <p className="text-center text-accent-foreground">
          Let&apos;s explore the world of Marvel together!
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="!my-1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input className="!my-1" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full"
              isLoading={isLoading}
              disabled={isLoading}
            >
              Login
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-2 flex gap-1.5 items-baseline justify-center">
        <p className="text-gray-500">Don&apos;t have an account?</p>
        <Button
          asChild
          variant="link"
          className="p-0 text-base"
          disabled={isLoading}
        >
          <Link href={ROUTES.REGISTER}>Register</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
