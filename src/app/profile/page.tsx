'use client';
import { useState } from 'react';
import cx from 'classnames';

import { Sidebar } from '@/components/ui/Sidebar';
import { Input } from '@/components/shared/Input';
import { EditingSvg } from '@/assets/icons/EditingSvg';
import { Column } from '@/components/shared/Column';
import Image from 'next/image';
import { Table } from '@/components/shared/Table';
import { CalendarSvg } from '@/assets/icons';
import { Row } from '@/components/shared/Row';
import { FilledStarSvg } from '@/assets/icons/FilledStarSvg';

export default function ProfileScreen() {
  const [switcher, setSwitcher] = useState<'profile' | 'rates'>('profile');

  function updateSwitcher(value: 'profile' | 'rates') {
    return () => setSwitcher(value);
  }

  return (
    <div className='flex'>
      <Sidebar />

      <main className='pt-[2rem] px-10 w-full bg-[#fcfcff]'>
        <div className='flex items-center'>
          <h1 className='text-[#2D2F37] font-medium text-[1.75rem]'>
            Личный кабинет
          </h1>

          <div
            className={`ml-20 flex items-center justify-center border rounded border-[#5774CD]`}
          >
            <button
              className={cx(
                'transition duration-200 py-2 px-4 text-xs text-[#2D2F37]',
                {
                  'bg-[#5774CD] text-white font-medium': switcher === 'profile',
                }
              )}
              onClick={updateSwitcher('profile')}
            >
              Личная информация
            </button>

            <button
              className={cx(
                'transition duration-200 py-2 px-4 text-xs border-l text-[#2D2F37] border-[#5774CD]',
                {
                  'bg-[#5774CD] text-white font-medium': switcher === 'rates',
                }
              )}
              onClick={updateSwitcher('rates')}
            >
              Отзывы
            </button>
          </div>
        </div>

        {switcher === 'profile' ? (
          <Column className='grid-cols-[1fr_0.75fr] gap-x-16'>
            <div>
              <Input label='Имя' placeholder='Ваше имя' type='text' />
              <Input label='Фамилия' placeholder='Ваше фамилия' type='text' />
              <Input
                label='Электронная почта'
                placeholder='Ваша почта'
                type='text'
              />
              <Input
                label='Номер телефона'
                placeholder='Ваш номер телефона'
                type='text'
              />

              <button
                className={`w-full mt-9 flex justify-center items-center gap-x-6 rounded-xl py-3 px-[2rem] bg-[#2D2F37]`}
              >
                <span className='text-white text-sm font-medium'>
                  Редактировать
                </span>
                <EditingSvg className='w-[1.125rem] h-[1.125rem] flex-shrink-0' />
              </button>
            </div>
            <div className=''>
              <Image
                src={require('@/assets/images/dashboard/ava.png')}
                alt=''
                className='w-40 h-40 rounded-full'
              />
            </div>
          </Column>
        ) : (
          <Column className='grid-cols-1 gap-x-0'>
            <Table
              header={
                <Column className='grid-cols-[0.5fr_1fr_0.5fr_0.5fr] py-6'>
                  <div className='pl-5'>
                    <span className='text-[#8D8D8D] text-sm'>Исполнитель</span>
                  </div>

                  <div>
                    <span className='text-[#8D8D8D] text-sm'>Текст</span>
                  </div>

                  <div>
                    <span className='text-[#8D8D8D] text-sm'>Отзыв</span>
                  </div>

                  <div className='pr-5'>
                    <span className='text-[#8D8D8D] text-sm'>Дата отзыва</span>
                  </div>
                </Column>
              }
              content={
                <Row className='gap-y-5'>
                  <Column className='grid-cols-[0.5fr_1fr_0.5fr_0.5fr]  bg-white px-5 py-4 rounded-xl'>
                    <div>
                      <div className='flex items-center gap-x-3'>
                        <Image
                          src={require('@/assets/images/dashboard/ava.png')}
                          alt=''
                          className='w-[2rem] h-[2rem] flex-shrink-0'
                        />
                        <span className='text-[#2D2F37] text-sm font-medium'>
                          Алтай
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className='text-[#2D2F37] font-medium'>
                        Хочу поблагодарить хоста по имени Максим за прекрасное
                        гостеприимство. Его квартира всегда была в идеальном
                        порядке, чистая и уютная. Максим всегда был готов помочь
                        и отвечал на все наши вопросы. Он создал прекрасные
                        условия для нашего комфортного пребывания. Большое
                        спасибо
                      </span>
                    </div>

                    <div>
                      <span className='text-[#2D2F37] font-medium flex items-center gap-x-1'>
                        <FilledStarSvg className='w-5 h-5 flex-shrink-0' />
                        <FilledStarSvg className='w-5 h-5 flex-shrink-0' />
                        <FilledStarSvg className='w-5 h-5 flex-shrink-0' />
                        <FilledStarSvg className='w-5 h-5 flex-shrink-0' />
                        <FilledStarSvg className='w-5 h-5 flex-shrink-0' />

                        <span className='ml-1'>5.0</span>
                      </span>
                    </div>

                    <div>
                      <div className='flex items-center gap-x-3'>
                        <CalendarSvg className='w-[1.125rem] h-[1.125rem] flex-shrink-0' />
                        <span className='text-[#2D2F37] text-sm'>
                          25.06.2023, 18:00
                        </span>
                      </div>
                    </div>
                  </Column>
                </Row>
              }
            />
          </Column>
        )}
      </main>
    </div>
  );
}
