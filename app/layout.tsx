import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import ReactQueryClientProvider from '@/components/react-query-client-provider';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marvel Caseshop',
  description: 'Marvel Caseshop is a web app for buying Marvel phone cases',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ReactQueryClientProvider>
          <main className="hidden md:block">{children}</main>
          <div className="flex md:hidden w-screen h-screen items-center justify-center">
            <span>This web app is not supported for mobile view</span>
          </div>
          <Toaster />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
