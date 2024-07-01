import { db } from '@/lib/db';
import createServerClient from '@/lib/supabase/server';

const getOrdersByUserId = async (userId: string) => {
  const orders = await db.order.findMany({
    orderBy: {
      orderDate: 'desc',
    },
    where: {
      userId,
    },
    include: {
      cart: {
        include: {
          items: {
            include: {
              productVariant: true,
            },
          },
        },
      },
      deliveryMethod: true,
      discount: true,
    },
  });

  return orders;
};

const getOrderById = async (orderId: string) => {
  const supabase = createServerClient();
  const currentUser = await supabase.auth.getUser();

  const order = await db.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      cart: {
        include: {
          items: {
            include: {
              productVariant: true,
            },
          },
        },
      },
      shippingAddress: true,
      billingAddress: true,
      deliveryMethod: true,
      paymentMethod: true,
      discount: true,
    },
  });

  // Public orders can be viewed by anyone
  if (!order?.userId) {
    return order;
  }

  // Private orders can only be viewed by the user who placed the order
  return order?.userId === currentUser?.data?.user?.id ? order : null;
};

export { getOrdersByUserId, getOrderById };
