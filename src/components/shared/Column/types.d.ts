import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

export interface ColumnProps
  extends PropsWithChildren,
    DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
