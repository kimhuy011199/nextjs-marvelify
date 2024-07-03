import createServerClient from '@/lib/supabase/server';
import { db } from '@/lib/db';

export async function GET() {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data?.user?.id) {
    return Response.json({ message: 'User not found' });
  }

  const cart = await db.cart.findUnique({
    where: {
      userId: data?.user?.id,
    },
    include: {
      items: {
        include: {
          productVariant: true,
        },
      },
    },
  });

  return Response.json({ cart });
}
