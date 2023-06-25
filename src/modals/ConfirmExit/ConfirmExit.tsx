import { SuccessSvg, XSvg } from '@/assets/icons';
import { Modal } from '@/components/shared/Modal';
import { ConfirmExitProps } from './types';

export function ConfirmExitModal({
  onClose,
  onAcceptButton,
  onRejectButton,
}: ConfirmExitProps) {
  return (
    <Modal
      onClose={onClose}
      title='Выход из аккаунта'
      subtitle='Вы уверены, что хотите выйти из системы?'
    >
      <div className='flex items-center gap-x-4 mt-5' aria-label='card-footer'>
        <button
          onClick={onRejectButton}
          className='w-full flex items-center justify-center gap-x-3 py-3 px-6 border border-[#2D2F37] rounded-xl'
        >
          <span className='text-sm text-[#2D2F37]'>Отклонить</span>
          <XSvg className='w-3 h-3 flex-shrink-0' />
        </button>

        <button
          onClick={onAcceptButton}
          className='w-full flex items-center justify-center gap-x-3 py-3 px-6 border border-[#5774CD] bg-[#5774CD] rounded-xl'
        >
          <span className='text-sm text-white font-medium'>Принять</span>
          <SuccessSvg className='w-4 h-3 flex-shrink-0' />
        </button>
      </div>
    </Modal>
  );
}
