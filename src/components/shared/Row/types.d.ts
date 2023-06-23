import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

export interface RowProps
  extends PropsWithChildren,
    DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
