import { Inter } from 'next/font/google';

import { ModalsProvider } from '@/context/modals';
import { IChild } from '@/types';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ApartX Cleaing',
  description: 'ApartX Cleaning',
};

export default function RootLayout({ children }: IChild) {
  return (
    <html lang='kk'>
      <body className={inter.className}>
        <ModalsProvider>{children}</ModalsProvider>
      </body>
    </html>
  );
}
