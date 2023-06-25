'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Column } from '@/components/shared/Column';
import { updateUserRole } from '@/api/userRole';
import { refreshToken } from '@/api/token';
import styles from './page.module.css';

export default function ChoosingRoleScreen() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token') && !localStorage.getItem('isAuth')) {
      return router.push('/');
    }
  }, [router]);

  function handleUpdateUserRole(role: 'Customer' | 'Executor') {
    const token = JSON.parse(localStorage.getItem('token') as string);

    updateUserRole(token.access, role)
      .then((response) => {
        if (response?.status === 200) {
          router.push('/dashboard');
        }
      })
      .catch(() => {
        refreshToken(token.refresh);
      });
  }

  return (
    <Column className='h-full gap-x-0'>
      <button
        onClick={() => handleUpdateUserRole('Executor')}
        className={styles.card + ' rounded-r-[2rem]'}
      >
        <div className='px-8 pt-8'>
          <Image
            src={require('@/assets/images/choosing-role/executor.png')}
            alt='executor image'
            className='h-[19.25rem] object-contain'
          />
        </div>

        <p className='text-[#2D2F37] transition text-[2rem] mt-20'>
          Исполнитель
        </p>
      </button>

      <button
        onClick={() => handleUpdateUserRole('Customer')}
        className={styles.card + ' rounded-l-[2rem]'}
      >
        <div className='px-8 pt-8'>
          <Image
            src={require('@/assets/images/choosing-role/customer.png')}
            alt='customer image'
            className='h-[19.25rem] object-contain'
          />
        </div>

        <p className='text-[#2D2F37] transition text-[2rem] mt-20'>Заказчик</p>
      </button>
    </Column>
  );
}
