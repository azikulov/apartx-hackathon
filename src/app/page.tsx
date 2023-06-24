'use client';
import Image from 'next/image';
import axios from 'axios';

import { LogoSvg } from '@/assets/icons';
import { Button } from '@/components/shared/Button';
import { AuthenticationModal } from '@/modals/Authentication';
import { useModalsContext } from '@/context/modals';
import { RegistrationModal } from '@/modals/Registration';
import { AuthenticationConfirmCodeModal } from '@/modals/AuthenticationConfirmCode';
import { RegistrationConfirmCodeModal } from '@/modals/RegistrationConfirmCode';
import type { Registration } from '@/types';

export default function HomeScreen() {
  const { modals, updateModal } = useModalsContext();

  function handleSubmitAuthentication() {
    updateModal({ key: 'authentication', value: false });
    updateModal({ key: 'authenticationConfirmCode', value: true });
  }

  function handleSubmitAuthenticationConfirmCode() {
    updateModal({ key: 'authenticationConfirmCode', value: false });
  }

  function handleSubmitRegistration() {
    updateModal({ key: 'registration', value: false });
    updateModal({ key: 'registrationConfirmCode', value: true });
  }

  function handleSubmitRegistrationConfirmCode() {
    updateModal({ key: 'registrationConfirmCode', value: false });
  }

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

          <Button
            onClick={() => updateModal({ key: 'authentication', value: true })}
          >
            Присоединиться
          </Button>
        </main>
      </div>

      {modals.authentication && (
        <AuthenticationModal
          onClickButton={handleSubmitAuthentication}
          onClose={() => updateModal({ key: 'authentication', value: false })}
        />
      )}

      {modals.authenticationConfirmCode && (
        <AuthenticationConfirmCodeModal
          onClickButton={handleSubmitAuthenticationConfirmCode}
          onClose={() =>
            updateModal({ key: 'authenticationConfirmCode', value: false })
          }
        />
      )}

      {modals.registration && (
        <RegistrationModal
          onClickButton={handleSubmitRegistration}
          onClose={() => updateModal({ key: 'registration', value: false })}
        />
      )}

      {modals.registrationConfirmCode && (
        <RegistrationConfirmCodeModal
          onClickButton={handleSubmitRegistrationConfirmCode}
          onClose={() =>
            updateModal({ key: 'registrationConfirmCode', value: false })
          }
        />
      )}
    </div>
  );
}
