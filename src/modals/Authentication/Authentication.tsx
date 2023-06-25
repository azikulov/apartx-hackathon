import { useState } from 'react';
import axios from 'axios';
import cx from 'classnames';

import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { Modal } from '@/components/shared/Modal';
import { useModalsContext } from '@/context/modals';
import type { AuthenticationProps, FormDataType } from './types';
import { API_URL } from '@/api';
import { useUserStore } from '@/store/useUserStore';

export function AuthenticationModal({
  onClose,
  onClickButton,
}: AuthenticationProps) {
  const { updateModal } = useModalsContext();
  const { updateState } = useUserStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataType>({
    email: undefined,
    password: undefined,
  });

  async function handleSubmit() {
    setIsLoading(true);
    setIsError(false);
    updateState({ email: formData.email });

    try {
      const response = await axios.post(API_URL + 'request-login/', formData);

      if (response.status === 200) {
        onClickButton();
        setIsError(false);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal onClose={onClose} title='Авторизация'>
      <Input
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        label='Ваш E-mail'
        placeholder='Введите ваш E-mail'
        type='email'
        errorMessage='Вы не ввели E-mail!'
      />
      <Input
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            password: e.target.value,
          }))
        }
        label='Ваш пароль'
        placeholder='Введите ваш пароль'
        type='password'
        errorMessage='Вы не ввели пароль!'
      />

      <Button
        isError={isError}
        disabled={isLoading}
        onClick={handleSubmit}
        className={'w-full'}
      >
        Продолжить
      </Button>

      <p className='mt-6 text-center text-sm'>
        <span className='text-[#2D2F37]'>У вас нету аккаунта? </span>
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
