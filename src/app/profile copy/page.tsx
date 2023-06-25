'use client';
import { useState } from 'react';
import cx from 'classnames';

import { Sidebar } from '@/components/ui/Sidebar';
import { Column } from '@/components/shared/Column';
import Image from 'next/image';
import { Table } from '@/components/shared/Table';
import { CalendarSvg } from '@/assets/icons';
import { Row } from '@/components/shared/Row';
import { FilledStarSvg } from '@/assets/icons/FilledStarSvg';
import { MailSvg } from '@/assets/icons/MailSvg';

export default function ExecutorScreen() {
  const [switcher, setSwitcher] = useState<
    'List of performers' | 'Offers for performers'
  >('List of performers');

  function updateSwitcher(
    value: 'List of performers' | 'Offers for performers'
  ) {
    return () => setSwitcher(value);
  }

  return (
    <div className='flex'>
      <Sidebar />

      <main className='pt-[2rem] px-10 w-full bg-[#fcfcff]'>
        <div className='flex items-center'>
          <h1 className='text-[#2D2F37] font-medium text-[1.75rem]'>
            Исполнители
          </h1>

          <div
            className={`ml-20 flex items-center justify-center border rounded border-[#5774CD]`}
          >
            <button
              className={cx(
                'transition duration-200 py-2 px-4 text-xs text-[#2D2F37]',
                {
                  'bg-[#5774CD] text-white font-medium':
                    switcher === 'List of performers',
                }
              )}
              onClick={updateSwitcher('List of performers')}
            >
              Список исполнителей
            </button>

            <button
              className={cx(
                'transition duration-200 py-2 px-4 text-xs border-l text-[#2D2F37] border-[#5774CD]',
                {
                  'bg-[#5774CD] text-white font-medium':
                    switcher === 'Offers for performers',
                }
              )}
              onClick={updateSwitcher('Offers for performers')}
            >
              Предложения для исполнителей
            </button>
          </div>
        </div>

        {switcher === 'List of performers' ? (
          <Column className='mt-[2rem] grid-cols-2 gap-8'>
            <div aria-label='card' className='bg-white p-5 rounded-xl'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-2.5'>
                  <Image
                    src={require('@/assets/images/dashboard/ava.png')}
                    alt=''
                    className='rounded-full flex-shrink-0 w-[2rem] h-[2rem]'
                  />

                  <span className='text-[#2D2F37] font-medium'>Алтай</span>
                </div>

                <div>
                  <span className='text-[#2D2F37] font-medium flex items-center gap-x-1'>
                    <FilledStarSvg className='w-5 h-5 flex-shrink-0' />
                    <FilledStarSvg className='w-5 h-5 flex-shrink-0' />
                    <FilledStarSvg className='w-5 h-5 flex-shrink-0' />
                    <FilledStarSvg className='w-5 h-5 flex-shrink-0' />
                    <FilledStarSvg className='w-5 h-5 flex-shrink-0' />

                    <span className='ml-1'>5.0 (1)</span>
                  </span>
                </div>
              </div>

              <div className='flex items-center gap-x-5 mt-5'>
                <div className='flex items-center gap-x-2.5'>
                  <MailSvg className='w-[1.125rem] h-[1.125rem] flex-shrink-0' />
                  <span className='text-sm text-[#2D2F37]'>
                    altaibuhaet@gmail.com
                  </span>
                </div>

                <div className='flex items-center gap-x-2.5'>
                  <MailSvg className='w-[1.125rem] h-[1.125rem] flex-shrink-0' />
                  <span className='text-sm text-[#2D2F37]'>
                    +7 777 073 69 81
                  </span>
                </div>
              </div>

              <button className='w-full mt-5 px-6 py-3 text-[#5774CD] text-sm border border-[#5774CD] rounded-lg'>
                Сделать предложение
              </button>
            </div>
          </Column>
        ) : (
          <Column className='grid-cols-1 gap-x-0'>
            <Table
              header={
                <Column className='grid-cols-[1fr_0.5fr_0.5fr_0.5fr] py-6'>
                  <div className='pl-5'>
                    <span className='text-[#8D8D8D] text-sm'>Название</span>
                  </div>

                  <div>
                    <span className='text-[#8D8D8D] text-sm'>Исполнитель</span>
                  </div>

                  <div>
                    <span className='text-[#8D8D8D] text-sm'>Стоимость</span>
                  </div>

                  <div className='pr-5'>
                    <span className='text-[#8D8D8D] text-sm'>Дедлайн</span>
                  </div>
                </Column>
              }
              content={
                <Row className='gap-y-5'>
                  <Column className='grid-cols-[1fr_0.5fr_0.5fr_0.5fr] bg-white px-5 py-4 rounded-xl items-center'>
                    <div>
                      <span className='text-[#2D2F37] font-medium'>
                        Подготовка гостиной для вечеринки
                      </span>
                    </div>

                    <div className='flex items-center gap-x-3'>
                      <Image
                        src={require('@/assets/images/dashboard/ava.png')}
                        alt=''
                        className='w-[2rem] h-[2rem] flex-shrink-0'
                      />
                      <span className='text-[#2D2F37] text-sm'>Алтай</span>
                    </div>

                    <div>
                      <span className='text-[#2D2F37] font-medium'>1000$</span>
                    </div>

                    <div className='flex items-center gap-x-3'>
                      <CalendarSvg className='w-[1.125rem] h-[1.125rem] flex-shrink-0' />
                      <span className='text-[#2D2F37] text-sm'>25.06.2023</span>
                    </div>
                  </Column>

                  <Column className='grid-cols-[1fr_0.5fr_0.5fr_0.5fr] bg-white px-5 py-4 rounded-xl items-center'>
                    <div>
                      <span className='text-[#2D2F37] font-medium'>
                        Подготовка гостиной для вечеринки
                      </span>
                    </div>

                    <div className='flex items-center gap-x-3'>
                      <Image
                        src={require('@/assets/images/dashboard/ava.png')}
                        alt=''
                        className='w-[2rem] h-[2rem] flex-shrink-0'
                      />
                      <span className='text-[#2D2F37] text-sm'>Алтай</span>
                    </div>

                    <div>
                      <span className='text-[#2D2F37] font-medium'>1000$</span>
                    </div>

                    <div className='flex items-center gap-x-3'>
                      <CalendarSvg className='w-[1.125rem] h-[1.125rem] flex-shrink-0' />
                      <span className='text-[#2D2F37] text-sm'>25.06.2023</span>
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
