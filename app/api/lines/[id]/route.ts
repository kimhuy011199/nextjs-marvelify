import createServerClient from '@/lib/supabase/server';
import { db } from '@/lib/db';

export async function PUT(req: Request) {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data?.user?.id) {
    return Response.json({ message: 'User not found' });
  }

  const body = await req.json();

  await db.cartLineItem.update({
    where: {
      id: body.data.cartLineItemId,
    },
    data: {
      quantity: body.data.quantity,
    },
  });

  return Response.json({ msg: 'Updated line item' });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data?.user?.id) {
    return Response.json({ message: 'User not found' });
  }

  if (!params.id) {
    return Response.json({ message: 'Line item not found' });
  }

  await db.cartLineItem.delete({
    where: {
      id: params.id,
    },
  });

  return Response.json({ message: 'Deleted line item' });
}
