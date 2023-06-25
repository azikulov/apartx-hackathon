import type { DetailedHTMLProps, ReactNode } from 'react';

export interface TableProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  header?: ReactNode;
  content?: ReactNode;
}
