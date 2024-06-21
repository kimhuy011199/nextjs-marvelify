'use server';

import { db } from '@/lib/db';
import { AddressType, OrderStatusType } from '@/lib/types';

type OrderInputDataType = {
  email: string;
  currency: string;
  total: number;
  subTotal: number;
  paymentMethodId: string;
  discount?: {
    code: string;
  };
  shippingAddress: AddressType;
  billingAddress?: AddressType;
  lineItems: Array<{
    productVariantId: string;
    quantity: number;
  }>;
  deliveryMethod: {
    id: string;
  };
};

export const placeOrder = async (orderData: OrderInputDataType) => {
  // PROD: Re-fetch products to get price and stock
  // PROD: Re-calculate price and discount
  const { email, currency, total, subTotal, paymentMethodId } = orderData;
  const discountCode = orderData?.discount?.code;

  // Create shipping address
  const shippingAddress = await db.address.create({
    data: orderData.shippingAddress,
  });

  // Create billing address
  // const billingAddress = await db.address.create({
  //   data: orderData.billingAddress,
  // });

  // Create cart + order items
  const cart = await db.cart.create({
    data: {
      items: {
        create: orderData.lineItems.map((item: any) => ({
          productVariant: {
            connect: {
              id: item.productVariantId,
            },
          },
          quantity: item.quantity,
        })),
      },
    },
  });

  // Create order
  const order = await db.order.create({
    data: {
      email,
      currency,
      total,
      subTotal,
      shippingAddress: {
        connect: {
          id: shippingAddress.id,
        },
      },
      billingAddress: {
        connect: {
          id: shippingAddress.id,
        },
      },
      deliveryMethod: {
        connect: {
          id: orderData.deliveryMethod.id,
        },
      },
      paymentMethod: {
        connect: {
          id: paymentMethodId,
        },
      },
      status: OrderStatusType.Processing,
      cart: {
        connect: {
          id: cart.id,
        },
      },
      ...(discountCode
        ? {
            discount: {
              connect: {
                code: discountCode,
              },
            },
          }
        : {}),
    },
  });

  // Update the Cart with the Order ID, if needed

  return order;
};
