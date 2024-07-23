import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import 'app/globals.css';

import RelayContextProvider from 'components/relay-context-provider';
import cn from 'utils/cn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PR Monitor',
  description: 'GitHub code review tool',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'h-screen')}>
        <div className="h-full bg-gray-50">
          <RelayContextProvider>{children}</RelayContextProvider>
        </div>
      </body>
    </html>
  );
}
