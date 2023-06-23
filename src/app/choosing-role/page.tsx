import Image from 'next/image';
import { Column } from '@/components/shared/Column';
import styles from './page.module.css';

export default function ChoosingRoleScreen() {
  return (
    <Column className='h-full gap-x-0'>
      <button className={styles.card + ' rounded-r-[2rem]'}>
        <div className='px-8 pt-8'>
          <Image
            src={require('@/assets/images/choosing-role/executor.png')}
            alt='executor image'
            className='h-[19.25rem] object-contain'
          />
        </div>

        <p className='text-[#2D2F37] transition text-[2rem] mt-20'>
          Исполнитель
        </p>
      </button>

      <button className={styles.card + ' rounded-l-[2rem]'}>
        <div className='px-8 pt-8'>
          <Image
            src={require('@/assets/images/choosing-role/customer.png')}
            alt='customer image'
            className='h-[19.25rem] object-contain'
          />
        </div>

        <p className='text-[#2D2F37] transition text-[2rem] mt-20'>Заказчик</p>
      </button>
    </Column>
  );
}
