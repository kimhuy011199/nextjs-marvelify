import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { ROUTES } from '@/lib/constants';

const protectedRoutes = [
  ROUTES.ACCOUNT_ADDRESSES,
  ROUTES.ACCOUNT_PROFILE,
  ROUTES.ACCOUNT_ORDERS,
];

const updateSession = async (request: NextRequest) => {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  // Handle protected routes
  const currentUser = await supabase.auth.getUser();
  if (
    !currentUser?.data?.user &&
    protectedRoutes.includes(request.nextUrl.pathname)
  ) {
    const absoluteURL = new URL(ROUTES.LOGIN, request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  // Handle authentication on auth routes
  if (
    currentUser?.data?.user &&
    request.nextUrl.pathname.includes(ROUTES.AUTH)
  ) {
    const absoluteURL = new URL(ROUTES.HOME, request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  return response;
};

export default updateSession;
