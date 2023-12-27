import React from 'react';
import type {Metadata} from 'next';
import '@/app/ui/globals.scss';
import {inter} from '@/app/ui/fonts';
import Header from '@/src/components/layout/header/header';

export const metadata: Metadata = {
  title: 'Nextjs Store',
  description: 'Store on nextjs',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
