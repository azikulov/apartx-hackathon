'use client';
import { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';

import { CalendarSvg, PlusSvg } from '@/assets/icons';
import { Column } from '@/components/shared/Column';
import { Row } from '@/components/shared/Row';
import { Table } from '@/components/shared/Table';
import { Sidebar } from '@/components/ui/Sidebar';
import { Card } from '@/components/ui/Card';
import type { DashboardSwitcher } from '@/types';
import { CreateOrderModal } from '@/modals/CreateOrder';

export default function Dashboard() {
  const [isOpenCreateOrder, setIsOpenCreateOrder] = useState(false);
  const [switcher, setSwitcher] = useState<DashboardSwitcher>('active');

  function updateSwitcher(value: DashboardSwitcher) {
    return () => setSwitcher(value);
  }

  return (
    <div className='flex'>
      <Sidebar />

      <main className='pt-[2rem] px-10 w-full bg-[#fcfcff]'>
        <div className='flex justify-between items-center'>
          <h1 className='text-[#2D2F37] text-[1.75rem]'>Список заказов</h1>

          <ul
            className={cx(`flex items-center justify-center border rounded`, {
              'border-[#5774CD]': switcher === 'active',
              'border-[#57CD63]': switcher === 'completed',
              'border-[#2D2F37]': switcher === 'offers',
              'border-[#B5CD57]': switcher === 'at work',
            })}
          >
            <li>
              <button
                className={cx(
                  'transition duration-200 py-2 px-4 text-xs text-[#2D2F37]',
                  {
                    'bg-[#5774CD] text-white font-medium':
                      switcher === 'active',
                  }
                )}
                onClick={updateSwitcher('active')}
              >
                Активные (4)
              </button>
            </li>
            <li>
              <button
                className={cx(
                  'transition duration-200 py-2 px-4 text-xs border-l text-[#2D2F37]',
                  {
                    'bg-[#B5CD57] border-[#B5CD57] text-white font-medium':
                      switcher === 'at work',
                    'border-[#5774CD]': switcher === 'active',
                    'border-[#2D2F37]': switcher === 'offers',
                    'border-[#B5CD57]': switcher === 'at work',
                  }
                )}
                onClick={updateSwitcher('at work')}
              >
                В работе (4)
              </button>
            </li>
            <li>
              <button
                className={cx(
                  'transition duration-200 py-2 px-4 text-xs border-l border-r text-[#2D2F37]',
                  {
                    'bg-[#57CD63] border-[#57CD63] text-white font-medium':
                      switcher === 'completed',
                    'border-[#5774CD]': switcher === 'active',
                    'border-[#B5CD57]': switcher === 'at work',
                    'border-[#2D2F37]': switcher === 'offers',
                  }
                )}
                onClick={updateSwitcher('completed')}
              >
                Выполненные (41)
              </button>
            </li>
            <li>
              <button
                className={cx(
                  'transition duration-200 py-2 px-4 text-xs text-[#2D2F37]',
                  {
                    'bg-[#2D2F37] text-white font-medium':
                      switcher === 'offers',
                  }
                )}
                onClick={updateSwitcher('offers')}
              >
                Предложения (4)
              </button>
            </li>
          </ul>

          <button
            onClick={() => setIsOpenCreateOrder(true)}
            className='flex items-center justify-center gap-x-2 py-2 px-6 rounded-xl bg-[#5774CD]'
          >
            <span className='text-white font-bold text-xs'>Создать заказ</span>
            <PlusSvg className='w-5 h-5 flex-shrink-0' />
          </button>
        </div>

        {switcher.includes('active') && (
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
            body={
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
        )}

        {switcher.includes('at work') && (
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
            body={
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
        )}

        {switcher.includes('completed') && (
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
            body={
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
        )}

        {switcher.includes('offers') && (
          <Column className='mt-6 grid-cols-3 gap-[2rem]'>
            <Card
              content='Подготовка гостиной для вечеринки'
              date='25.06.2023 - 27.06.2023'
              image={''}
              name='Алтай'
              price='1000$'
            />
          </Column>
        )}
      </main>

      {isOpenCreateOrder && (
        <CreateOrderModal onClose={() => setIsOpenCreateOrder(false)} />
      )}
    </div>
  );
}
