import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

import { Button } from '@/components/shared/Button';
import { Modal } from '@/components/shared/Modal';
import { Pin } from '@/components/shared/Pin';
import { useUserStore } from '@/store/useUserStore';
import type { FormData, RegistrationConfirmCodeProps } from './types';
import { API_URL } from '@/api';

export function RegistrationConfirmCodeModal({
  onClose,
  onClickButton,
}: RegistrationConfirmCodeProps) {
  const { state } = useUserStore();

  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    code: undefined,
    email: state.email,
  });

  async function handleSubmit() {
    try {
      const response = await axios.post(
        API_URL + 'confirm-register/',
        formData
      );

      if (response.status === 201) {
        if (sessionStorage) {
          sessionStorage.setItem('isAuth', 'true');
          sessionStorage.setItem('token', JSON.stringify(response.data.token));
        }

        router.push('/choosing-role');

        onClickButton();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal
      onClose={onClose}
      title='Введите код для подтверждения'
      subtitle='На вашу почту пришел код, впишите его пожалуйста, для подтверждения регистрации'
    >
      <Pin
        onChange={(data) =>
          setFormData((prev) => ({ ...prev, code: Number(data) }))
        }
      />

      <Button onClick={handleSubmit} className='w-full'>
        Продолжить
      </Button>
    </Modal>
  );
}
