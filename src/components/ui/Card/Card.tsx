import Image from 'next/image';

import { CalendarSvg, XSvg, SuccessSvg } from '@/assets/icons';
import { CardProps } from './types';

export function Card({ content, date, image, name, price }: CardProps) {
  return (
    <div aria-label='card' className='bg-white p-5 rounded-xl'>
      <div
        aria-label='card-header'
        className='flex items-center justify-between'
      >
        <div className='flex items-center gap-x-2.5'>
          <Image
            src={image || require('@/assets/images/dashboard/ava.png')}
            alt=''
            className='w-[2rem] h-[2rem] flex-shrink-0'
          />
          <span className='text-sm font-medium text-[#2D2F37]'>{name}</span>
        </div>

        <span className='text-[#2D2F37] font-medium'>{price}</span>
      </div>

      <p className='mt-4 text-[#2D2F37] font-medium leading-[1.25rem]'>
        {content}
      </p>

      <div className='mt-4 flex items-center gap-x-3'>
        <CalendarSvg className='w-[1.125rem] h-[1.125rem]' />

        <span className='text-[#2D2F37] text-sm font-medium'>{date}</span>
      </div>

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
    </div>
  );
}
