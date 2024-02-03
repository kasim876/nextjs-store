import React from 'react';
import type {Metadata} from 'next';
import '@/app/globals.scss';
import {GeistSans as geist} from 'geist/font/sans';
import Header from '@/src/components/layout/header/header';
import Footer from '@/src/components/layout/footer/footer';

export const metadata: Metadata = {
  title: 'Nextjs Store',
  description: 'Store on nextjs',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
