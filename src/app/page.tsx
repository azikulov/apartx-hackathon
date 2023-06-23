import { ArrowRightSvg } from '@/assets/icons/ArrowRightSvg';
import { LogoSvg } from '@/assets/icons/LogoSvg';
import { Button } from '@/components/shared/Button';
import { Column } from '@/components/shared/Column';
import { Input } from '@/components/shared/Input';
import { Modal } from '@/components/shared/Modal';
import { Pin } from '@/components/shared/Pin';
import Image from 'next/image';

export default function HomeScreen() {
  return (
    <div className='grid grid-cols-2 h-full'>
      <div className='rounded-r-[2rem] grid place-items-center bg-[#E1E9FF]'>
        <Image
          src={require('@/assets/images/home.png')}
          alt='ApartX Hackathon'
          className='w-[calc(100%_-_7.5rem)]'
        />
      </div>

      <div className='mx-[3.75rem] my-[2rem]'>
        <header className='flex items-center justify-between gap-x-4'>
          <div>
            <LogoSvg className='h-[2.125rem] flex-shrink-0' />
          </div>

          <div className='border border-[#5774CD] rounded-[0.25rem]'>
            <button className='text-xs px-4 py-2 font-bold text-white bg-[#5774CD]'>
              RU
            </button>
            <button className='text-xs px-4 py-2 text-[#2D2F37]'>KZ</button>
          </div>
        </header>

        <main className='mt-[5.25rem]'>
          <h1 className='text-[3.25rem] leading-[3.25rem] text-[#2D2F37]'>
            Добро пожаловать <br /> в ApartX Cleaning
          </h1>

          <p className='mt-6 text-[#2D2F37] leading-[1.25rem]'>
            Профессиональные горничные, создающие идеальную обстановку:
            надежность, эффективность и безупречное внимание к деталям – ваш
            ключ к безмятежному и роскошному пребыванию
          </p>

          <Button>Присоединиться</Button>
        </main>
      </div>

      {/* <VerificationModal /> */}
    </div>
  );
}

function VerificationModal() {
  return (
    <Modal
      title='Введите код для подтверждения'
      subtitle='На вашу почту пришел код, впишите его пожалуйста, для подтверждения регистрации'
    >
      <Pin />

      <Button className='w-full'>Продолжить</Button>
    </Modal>
  );
}

function CodeModal() {
  return (
    <Modal
      title='Введите код'
      subtitle='На вашу почту пришел код, впишите его пожалуйста, для авторизации'
    >
      <Pin />

      <Button className='w-full'>Продолжить</Button>
    </Modal>
  );
}

function RegistrationModal() {
  return (
    <Modal title='Регистрация'>
      <Input label='Ваш E-mail' placeholder='Введите ваш E-mail' type='email' />

      <Column>
        <Input label='Имя' placeholder='Введите ваше имя' type='text' />
        <Input label='Фамилия' placeholder='Введите ваше фамилие' type='text' />
      </Column>

      <Input
        label='Номер телефона'
        placeholder='Введите ваш номер телефона'
        type='tel'
      />

      <Input
        label='Ваше изображение'
        placeholder='Максимальный размер фотографии 4мб, формат PNG/JPEG/JPG.'
        type='image'
      />

      <Button className='w-full'>Продолжить</Button>
    </Modal>
  );
}

function AuthenticationModal() {
  return (
    <Modal title='Авторизация'>
      <Input label='Ваш E-mail' placeholder='Введите ваш E-mail' type='email' />

      <Button className='w-full'>Продолжить</Button>

      <p className='mt-6 text-center text-sm text-[#2D2F37]'>
        <span>У вас нету аккаунта? </span>
        <a href='#' className='font-medium text-[#5774CD]'>
          Зарегистрируйтесь
        </a>
      </p>
    </Modal>
  );
}
