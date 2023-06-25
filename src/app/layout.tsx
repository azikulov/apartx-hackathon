'use client';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

import { ModalsProvider } from '@/context/modals';
import { getUserData } from '@/api/user';
import type { IChild } from '@/types';
import './globals.css';
import { useUserDataStore } from '@/store/useUserDataStore';
import { useAuthStore } from '@/store/useAuthStore';
import { usePathname, useRouter } from 'next/navigation';
import { refreshToken } from '@/api/token';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

export default function RootLayout({ children }: IChild) {
  const { updateUser } = useUserDataStore();
  const { isAuth } = useAuthStore();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuth && pathname !== '/') return router.push('/');

    if (isAuth) {
      const token = JSON.parse(sessionStorage.getItem('token') as string);

      refreshToken(token.refresh).catch(() => {
        router.push('/');
      });

      getUserData().then((response) => {
        updateUser(response?.data);
      });
    }
  }, [updateUser, isAuth, router, pathname]);

  return (
    <html lang='kk'>
      <body className={inter.className}>
        <ModalsProvider>{children}</ModalsProvider>
      </body>
    </html>
  );
}
