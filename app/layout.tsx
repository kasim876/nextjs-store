import React from 'react';
import type {Metadata} from 'next';
import '@/app/globals.scss';
import {inter} from '@/src/components/fonts';
import Header from '@/src/components/layout/header/header';
import Footer from '@/src/components/layout/footer/footer';

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
        <Footer />
      </body>
    </html>
  );
}
