import cx from 'classnames';
import { ArrowRightSvg } from '@/assets/icons/ArrowRightSvg';
import type { ButtonProps } from './types';

export function Button({
  children,
  className,
  disabled,
  isError,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={cx(
        `mt-10 flex justify-center items-center gap-x-6 rounded-xl py-4 px-[2rem] bg-[#5774CD]`,
        className,
        {
          'bg-[#5774CD]': !isError,
          'bg-[#d00000]': isError,
          'opacity-50': disabled,
        }
      )}
    >
      <span className='text-white text-lg font-bold'>{children}</span>
      <ArrowRightSvg className='w-[2rem] h-[2rem] flex-shrink-0' />
    </button>
  );
}
