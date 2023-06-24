import { Button } from '@/components/shared/Button';
import { Modal } from '@/components/shared/Modal';
import { Pin } from '@/components/shared/Pin';
import type { RegistrationConfirmCodeProps } from './types';
import axios from 'axios';
import { useAuthenticationStore } from '@/store/useAuthenticationStore';
import { useState } from 'react';

export function RegistrationConfirmCodeModal({
  onClose,
  onClickButton,
}: RegistrationConfirmCodeProps) {
  const { state } = useAuthenticationStore();

  const [formData, setFormData] = useState<{
    email: string | undefined;
    code: number | undefined;
  }>({ code: undefined, email: state.email });

  async function handleSubmit() {
    const API_URL = 'https://f037-217-196-25-57.ngrok-free.app/';

    try {
      const response = await axios.post(
        API_URL + 'confirm-register/',
        formData
      );
      if (response.status === 201) onClickButton();
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
