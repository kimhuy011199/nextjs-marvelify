import { db } from '@/lib/db';

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

  return order;
};

export { getOrdersByUserId, getOrderById };
