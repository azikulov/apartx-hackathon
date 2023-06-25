'use client';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

import { ModalsProvider } from '@/context/modals';
import { getUserData } from '@/api/user';
import type { IChild } from '@/types';
import './globals.css';
import { useUserDataStore } from '@/store/useUserDataStore';
import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

export default function RootLayout({ children }: IChild) {
  const { updateUser } = useUserDataStore();
  const { isAuth } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    if (!isAuth) return router.push('/');

    if (isAuth) {
      getUserData().then((response) => {
        updateUser(response?.data);
      });
    }
  }, [updateUser, isAuth, router]);

  return (
    <html lang='kk'>
      <body className={inter.className}>
        <ModalsProvider>{children}</ModalsProvider>
      </body>
    </html>
  );
}
