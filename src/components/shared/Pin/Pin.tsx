'use client';
import { PinField } from 'react-pin-field';

export function Pin() {
  return (
    <div className='flex justify-center items-center mt-6 gap-x-[1.25rem]'>
      <PinField
        className='w-[3rem] h-[3rem] text-center text-xl text-[#2D2F37] border border-[#DFDFDF] rounded outline-none focus:border-[#5774CD]'
        length={6}
        maxLength={6}
        validate={/^[0-9]$/}
      />
    </div>
  );
}
