import { Input } from '@/components/shared/Input';
import { Modal } from '@/components/shared/Modal';
import type { IModal } from '@/types';

export function CreateOrderModal({ onClose }: IModal) {
  return (
    <Modal onClose={onClose} title='Создать заказ'>
      <Input label='Услуга' placeholder='Введите вашу услугу' type='text' />

      <Input
        label='Стоимость'
        placeholder='Введите вашу стоимость'
        type='tel'
      />

      <Input
        label='Номер телефона'
        placeholder='Введите ваш номер телефона'
        type='date'
      />
      <button
        className={`w-full mt-6 flex justify-center items-center gap-x-6 rounded-xl py-4 px-[2rem] bg-[#5774CD]`}
      >
        <span className='text-white text-sm font-bold'>Создать</span>
      </button>
    </Modal>
  );
}
