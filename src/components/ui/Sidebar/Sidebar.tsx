'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import {
  ClipboardSvg,
  LogoSvg,
  UserSvg,
  ChatSvg,
  ExitSvg,
} from '@/assets/icons';
import { ConfirmExitModal } from '@/modals/ConfirmExit';
import { useUserDataStore } from '@/store/useUserDataStore';
import { updateUserRole } from '@/api/userRole';
import { FilledUserSvg } from '@/assets/icons/FilledUserSvg';
import { OutlineClipboardSvg } from '@/assets/icons/FilledClipboardSvg';
import { ExecutorSvg } from '@/assets/icons/ExecutorSvg';
import { FilledExecutorSvg } from '@/assets/icons/FilledExecutorSvg';

export function Sidebar() {
  const { role, updateUser } = useUserDataStore();

  const pathname = usePathname();
  const router = useRouter();

  const [isOpenConfirmExit, setIsOpenConfirmExit] = useState<boolean>(false);

  function handleSwitchRole(role: 'Executor' | 'Customer') {
    const token =
      typeof window !== 'undefined'
        ? JSON.parse(sessionStorage.getItem('token') as string)
        : {};

    return () => {
      updateUserRole(token.access, role);
      updateUser({ role });
    };
  }

  return (
    <aside className='shadow-sidebar h-screen flex flex-col rounded-r-xl w-[16rem]'>
      <div className='pt-[2rem] px-[2rem]'>
        <LogoSvg className='h-[2.125rem]' />
      </div>

      <nav className='mt-10 flex flex-col gap-y-4'>
        <Link
          href='/dashboard'
          className={cx('px-[2rem] py-4 flex items-center rounded-lg gap-x-3', {
            'bg-[#5774CD]': pathname.includes('/dashboard'),
          })}
        >
          {pathname.includes('dashboard') ? (
            <ClipboardSvg className={cx('h-6 w-[1.125rem] text-white')} />
          ) : (
            <OutlineClipboardSvg
              className={cx('h-6 w-[1.125rem] text-white')}
            />
          )}
          <span
            className={
              pathname.includes('dashboard') ? 'text-white' : 'text-[#2d2f37]'
            }
          >
            Список заказов
          </span>
        </Link>

        <Link
          href='/executor'
          className={cx('px-[2rem] py-4 flex items-center rounded-lg gap-x-3', {
            'bg-[#5774CD]': pathname.includes('/executor'),
          })}
        >
          {pathname.includes('executor') ? (
            <FilledExecutorSvg className={'h-6 w-[1.125rem]'} />
          ) : (
            <ExecutorSvg className={'h-6 w-[1.125rem]'} />
          )}

          <span
            className={
              pathname.includes('executor') ? 'text-white' : 'text-[#2d2f37]'
            }
          >
             Исполнители
          </span>
        </Link>

        <Link
          href='/profile'
          className={cx('px-[2rem] py-4 flex items-center rounded-lg gap-x-3', {
            'bg-[#5774CD]': pathname.includes('/profile'),
          })}
        >
          {pathname.includes('profile') ? (
            <FilledUserSvg className={'h-6 w-[1.125rem]'} />
          ) : (
            <UserSvg className={'h-6 w-[1.125rem]'} />
          )}

          <span
            className={
              pathname.includes('profile') ? 'text-white' : 'text-[#2d2f37]'
            }
          >
            Личный кабинет
          </span>
        </Link>

        <Link
          href='/chat'
          className='px-[2rem] py-4 flex items-center rounded-lg gap-x-3'
        >
          <ChatSvg className='text-[#2D2F37] h-6 w-[1.125rem]' />
          <span className='text-[#2D2F37]'>Чат</span>
        </Link>
      </nav>

      <div className='flex mt-auto mx-[2rem] mb-[2rem] border border-[#5774CD] rounded-full'>
        <button
          className={cx('inline-block text-[0.625rem] py-3 px-5 rounded-full', {
            'text-white font-medium bg-[#5774CD]': role === 'Customer',
          })}
          onClick={handleSwitchRole('Customer')}
        >
          Заказчик
        </button>
        <button
          className={cx('inline-block text-[0.625rem] py-3 px-5 rounded-full', {
            'text-white font-medium bg-[#5774CD]': role === 'Executor',
          })}
          onClick={handleSwitchRole('Executor')}
        >
          Исполнитель
        </button>
      </div>

      <button
        onClick={() => setIsOpenConfirmExit(true)}
        className='mb-10 mx-[2rem] flex items-center gap-x-3'
      >
        <ExitSvg className='w-5 h-5 flex-shrink-0' />
        <span className='text-sm text-[#8D8D8D]'>Выйти из системы</span>
      </button>

      {isOpenConfirmExit && (
        <ConfirmExitModal
          onClose={() => setIsOpenConfirmExit(false)}
          onRejectButton={() => setIsOpenConfirmExit(false)}
          onAcceptButton={() => {
            sessionStorage.removeItem('isAuth');
            setIsOpenConfirmExit(false);
            router.push('/');
          }}
        />
      )}
    </aside>
  );
}
