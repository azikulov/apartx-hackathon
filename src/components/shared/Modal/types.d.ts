import type { PropsWithChildren } from 'react';

export interface ModalProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
}
