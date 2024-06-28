'use server';

import { z } from 'zod';
import { LoginSchema, RegisterSchema } from '@/lib/schema/authentication';
import createServerClient from '@/lib/supabase/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/lib/constants';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validation = LoginSchema.safeParse(values);

  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  // Create supabase auth user
  const supabase = createServerClient();
  const supabaseAuthResponse = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  if (supabaseAuthResponse.error) {
    throw new Error(supabaseAuthResponse.error?.message);
  }

  revalidatePath('/', 'layout');
  redirect(ROUTES.CART);
};

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validation = RegisterSchema.safeParse(values);

  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  // Create supabase auth user
  const supabase = createServerClient();
  const supabaseAuthResponse = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
  });

  if (supabaseAuthResponse.error) {
    throw new Error(supabaseAuthResponse.error?.message);
  }

  if (supabaseAuthResponse?.data?.user?.id) {
    // Create user profile
    await db.profile.create({
      data: {
        id: supabaseAuthResponse.data.user.id,
        email: values.email,
        name: values.name,
      },
    });

    revalidatePath('/', 'layout');
    redirect(ROUTES.CART);
  }

  return 'Registered successfully';
};

export const logout = async () => {
  const supabase = createServerClient();
  await supabase.auth.signOut();
  revalidatePath('/', 'layout');
  redirect(ROUTES.LOGIN);
};
