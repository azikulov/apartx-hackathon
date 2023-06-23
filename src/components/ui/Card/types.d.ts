import type { StaticImageData } from 'next/image';

export interface CardProps {
  image: string | StaticImageData;
  name: string;
  price: string;
  content: string;
  date: string;
}
