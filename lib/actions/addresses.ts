'use server';

import { db } from '@/lib/db';
import createServerClient from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { ROUTES } from '@/lib/constants';

const createAddress = async (addressData: any) => {
  const supabase = createServerClient();
  const currentUser = await supabase.auth.getUser();

  const address = await db.address.create({
    data: {
      ...addressData,
      userId: currentUser?.data?.user?.id || undefined,
    },
  });

  revalidatePath(ROUTES.ACCOUNT_ADDRESSES, 'layout');
  return address;
};

const updateAddress = async (addressData: any) => {
  const supabase = createServerClient();
  const currentUser = await supabase.auth.getUser();

  const address = await db.address.update({
    where: {
      id: addressData.id,
      userId: currentUser?.data?.user?.id,
    },
    data: addressData,
  });

  revalidatePath(ROUTES.ACCOUNT_ADDRESSES, 'layout');
  return address;
};

export { createAddress, updateAddress };
