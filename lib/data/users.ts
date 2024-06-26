import { db } from '@/lib/db';

const getProfileByUserId = async (userId: string) => {
  const profile = await db.profile.findUnique({
    where: {
      id: userId,
    },
  });

  const addressesNumber = await db.address.count({
    where: {
      userId,
    },
  });

  const ordersNumber = await db.order.count({
    where: {
      userId,
    },
  });

  return { profile, ordersNumber, addressesNumber };
};

export { getProfileByUserId };
