import { ArrowRightSvg } from '@/assets/icons/ArrowRightSvg';
import type { ButtonProps } from './types';

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${className} mt-10 flex justify-center items-center gap-x-6 rounded-xl py-4 px-[2rem] bg-[#5774CD]`}
    >
      <span className='text-white text-lg font-bold'>{children}</span>
      <ArrowRightSvg className='w-[2rem] h-[2rem] flex-shrink-0' />
    </button>
  );
}
