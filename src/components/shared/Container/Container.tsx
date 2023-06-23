import { IChild } from '@/types';

export function Container({ children }: IChild) {
  return <div className='max-w-7xl mx-auto px-6'>{children}</div>;
}
