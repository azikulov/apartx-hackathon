import { useState } from 'react';

import { Button } from '@/components/shared/Button';
import { Column } from '@/components/shared/Column';
import { Input } from '@/components/shared/Input';
import { Modal } from '@/components/shared/Modal';
import type { RegistrationProps } from './types';
import axios from 'axios';
import { useAuthenticationStore } from '@/store/useAuthenticationStore';
import { Registration } from '@/types';

export function RegistrationModal({
  onClose,
  onClickButton,
}: RegistrationProps) {
  const [formData, setFormData] = useState<Registration>({});
  const form = new FormData();
  const { updateState } = useAuthenticationStore();

  async function handleSubmit() {
    const API_URL = 'https://f037-217-196-25-57.ngrok-free.app/';

    form.append('email', formData.email as string);
    form.append('first_name', formData.first_name as string);
    form.append('last_name', formData.last_name as string);
    form.append('phone_number', formData.phone_number as string);
    form.append('password', formData.password as string);

    try {
      const response = await axios.post(API_URL + 'request-register/', form);

      if (response.status === 200) {
        updateState({ email: form.get('email') as string });
        onClickButton();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal onClose={onClose} title='Регистрация'>
      <Input
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        label='Ваш E-mail'
        placeholder='Введите ваш E-mail'
        type='email'
      />

      <Column>
        <Input
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, first_name: e.target.value }))
          }
          label='Имя'
          placeholder='Введите ваше имя'
          type='text'
        />
        <Input
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, last_name: e.target.value }))
          }
          label='Фамилия'
          placeholder='Введите ваше фамилие'
          type='text'
        />
      </Column>

      <Input
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, phone_number: e.target.value }))
        }
        label='Номер телефона'
        placeholder='Введите ваш номер телефона'
        type='tel'
      />

      <Input
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
        label='Пароль'
        placeholder='Введите ваш пароль'
        type='password'
      />

      <Input
        onChange={(e) =>
          e.target.files && form.append('avatar', e.target.files[0])
        }
        label='Ваше изображение'
        placeholder='Максимальный размер фотографии 4мб, формат PNG/JPEG/JPG.'
        type='image'
      />

      <Button type='submit' onClick={handleSubmit} className='w-full'>
        Продолжить
      </Button>
    </Modal>
  );
}
