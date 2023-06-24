import { IModal } from '@/types';
import type { PropsWithChildren } from 'react';

export interface ModalProps extends PropsWithChildren, IModal {
  title: string;
  subtitle?: string;
}
