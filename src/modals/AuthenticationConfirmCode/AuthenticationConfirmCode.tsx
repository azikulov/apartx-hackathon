import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/shared/Button';
import { Modal } from '@/components/shared/Modal';
import { Pin } from '@/components/shared/Pin';
import { useUserStore } from '@/store/useUserStore';
import type { FormDataType, AuthenticationConfirmCodeProps } from './types';
import { API_URL } from '@/api';
import { getUserRole } from '@/api/userRole';

export function AuthenticationConfirmCodeModal({
  onClose,
  onClickButton,
}: AuthenticationConfirmCodeProps) {
  const { state } = useUserStore();

  const router = useRouter();

  const [formData, setFormData] = useState<FormDataType>({
    code: undefined,
    email: state.email,
  });

  async function handleSubmit() {
    try {
      const response = await axios.post(API_URL + 'confirm-login/', formData);

      if (response.status === 200) {
        if (sessionStorage) {
          sessionStorage.setItem('isAuth', 'true');
          sessionStorage.setItem('token', JSON.stringify(response.data.token));
        }

        const userRole = await getUserRole(response.data.token.access);

        if (userRole.role === '') {
          return router.push('/choosing-role');
        }

        router.push('/dashboard');
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
