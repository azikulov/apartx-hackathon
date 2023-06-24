import { Button } from '@/components/shared/Button';
import { Modal } from '@/components/shared/Modal';
import { Pin } from '@/components/shared/Pin';
import type { AuthenticationConfirmCodeProps } from './types';

export function AuthenticationConfirmCodeModal({
  onClose,
  onClickButton,
}: AuthenticationConfirmCodeProps) {
  return (
    <Modal
      onClose={onClose}
      title='Введите код для подтверждения'
      subtitle='На вашу почту пришел код, впишите его пожалуйста, для подтверждения регистрации'
    >
      <Pin />

      <Button onClick={onClickButton} className='w-full'>
        Продолжить
      </Button>
    </Modal>
  );
}
