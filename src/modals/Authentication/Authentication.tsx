import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { Modal } from '@/components/shared/Modal';
import { useModalsContext } from '@/context/modals';
import type { AuthenticationProps } from './types';

export function AuthenticationModal({
  onClose,
  onClickButton,
}: AuthenticationProps) {
  const { updateModal } = useModalsContext();

  return (
    <Modal onClose={onClose} title='Авторизация'>
      <Input label='Ваш E-mail' placeholder='Введите ваш E-mail' type='email' />

      <Button onClick={onClickButton} className='w-full'>
        Продолжить
      </Button>

      <p className='mt-6 text-center text-sm text-[#2D2F37]'>
        <span>У вас нету аккаунта? </span>
        <button
          onClick={() => {
            updateModal({ key: 'authentication', value: false });
            updateModal({ key: 'registration', value: true });
          }}
          className='font-medium text-[#5774CD]'
        >
          Зарегистрируйтесь
        </button>
      </p>
    </Modal>
  );
}
