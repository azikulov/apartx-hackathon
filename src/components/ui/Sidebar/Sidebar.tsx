import Link from 'next/link';

import {
  SuccessSvg,
  XSvg,
  ClipboardSvg,
  LogoSvg,
  UserSvg,
  ChatSvg,
  ExitSvg,
} from '@/assets/icons';
import { Modal } from '@/components/shared/Modal';

export function Sidebar() {
  return (
    <aside className='shadow-sidebar h-screen flex flex-col rounded-r-xl w-[16rem]'>
      <div className='pt-[2rem] px-[2rem]'>
        <LogoSvg className='h-[2.125rem]' />
      </div>

      <nav className='mt-10 flex flex-col gap-y-4'>
        <Link
          href='#'
          className='px-[2rem] py-4 bg-[#5774CD] flex items-center rounded-lg gap-x-3'
        >
          <ClipboardSvg className='text-white h-6 w-[1.125rem]' />
          <span className='text-white'>Список заказов</span>
        </Link>

        <Link
          href='#'
          className='px-[2rem] py-4 flex items-center rounded-lg gap-x-3'
        >
          <UserSvg className='text-[#2D2F37] h-6 w-[1.125rem]' />
          <span className='text-[#2D2F37]'>Личный кабинет</span>
        </Link>

        <Link
          href='#'
          className='px-[2rem] py-4 flex items-center rounded-lg gap-x-3'
        >
          <ChatSvg className='text-[#2D2F37] h-6 w-[1.125rem]' />
          <span className='text-[#2D2F37]'>Чат</span>
        </Link>
      </nav>

      <div className='mt-auto mx-[2rem] mb-[2rem] border border-[#5774CD] rounded-full'>
        <Link
          className='inline-block text-[0.625rem] py-3 px-5 font-medium bg-[#5774CD] text-white rounded-full'
          href='#'
        >
          Заказчик
        </Link>
        <Link className='inline-block text-[0.625rem] p-3' href='#'>
          Исполнитель
        </Link>
      </div>

      <button className='mb-10 mx-[2rem] flex items-center gap-x-3'>
        <ExitSvg className='w-5 h-5 flex-shrink-0' />
        <span className='text-sm text-[#8D8D8D]'>Выйти из системы</span>
      </button>

      {/* <ConfirmExitModal /> */}
    </aside>
  );
}

function ConfirmExitModal() {
  return (
    <Modal
      title='Выход из аккаунта'
      subtitle='Вы уверены, что хотите выйти из системы?'
    >
      <div className='flex items-center gap-x-4 mt-5' aria-label='card-footer'>
        <button className='w-full flex items-center justify-center gap-x-3 py-3 px-6 border border-[#2D2F37] rounded-xl'>
          <span className='text-sm text-[#2D2F37]'>Отклонить</span>
          <XSvg className='w-3 h-3 flex-shrink-0' />
        </button>

        <button className='w-full flex items-center justify-center gap-x-3 py-3 px-6 border border-[#5774CD] bg-[#5774CD] rounded-xl'>
          <span className='text-sm text-white font-medium'>Принять</span>
          <SuccessSvg className='w-4 h-3 flex-shrink-0' />
        </button>
      </div>
    </Modal>
  );
}
