import createServerClient from '@/lib/supabase/server';
import { db } from '@/lib/db';

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

export { getAddresses };
