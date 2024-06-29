import createServerClient from '@/lib/supabase/server';
import { db } from '@/lib/db';
import { EXAMPLE_ADDRESSES } from '@/lib/constants';

const getExampleAddress = () => {
  const randomIndex = Math.floor(Math.random() * EXAMPLE_ADDRESSES.length);
  return EXAMPLE_ADDRESSES[randomIndex];
};

const getAddresses = async () => {
  const supabase = createServerClient();
  const currentUser = await supabase.auth.getUser();

  if (!currentUser?.data?.user?.id) {
    return [];
  }

  const addresses = await db.address.findMany({
    where: {
      userId: currentUser.data.user.id,
    },
  });

  return addresses;
};

export { getExampleAddress, getAddresses };
