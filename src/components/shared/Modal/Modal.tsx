import type { ModalProps } from './types';

export function Modal({ title, subtitle, children, onClose }: ModalProps) {
  return (
    <div className={`fixed top-0 h-full w-full overflow-y-auto py-[7.5rem]`}>
      <div
        onClick={onClose}
        className='fixed top-0 -z-10 w-full h-full bg-[#2d2f37a3]'
      />

      <div className='max-w-xl mx-auto bg-[#fff] rounded-xl p-6 pb-[2rem]'>
        <h1 className='text-[#2D2F37] font-medium text-[2.25rem] leading-[2.5rem] text-center'>
          {title}
        </h1>

        <p
          className='text-center mt-4 text-[#2D2F37] leading-[1.25rem]'
          hidden={!subtitle}
        >
          {subtitle}
        </p>

        {children}
      </div>
    </div>
  );
}
