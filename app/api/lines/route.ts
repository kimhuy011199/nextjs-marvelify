import createServerClient from '@/lib/supabase/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data?.user?.id) {
    return Response.json({ message: 'User not found' });
  }

  const body = await req.json();

  const line = await db.cartLineItem.findFirst({
    where: {
      cartId: body.data.cartId,
      productVariantId: body.data.productVariantId,
    },
  });

  if (line) {
    await db.cartLineItem.update({
      where: {
        id: line.id,
      },
      data: {
        quantity: line.quantity + body.data.quantity,
      },
    });
    return Response.json({ msg: 'Updated line item', id: line.id });
  } else {
    const line = await db.cartLineItem.create({
      data: body.data,
    });
    return Response.json({ msg: 'Added line item to cart', id: line.id });
  }
}
