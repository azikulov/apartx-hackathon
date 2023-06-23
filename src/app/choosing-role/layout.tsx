import { Inter } from 'next/font/google';

import { IChild } from '@/types';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ApartX Cleaing | Выбор роли',
  description: 'ApartX Cleaning',
};

export default function RootLayout({ children }: IChild) {
  return (
    <html lang='kk'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
