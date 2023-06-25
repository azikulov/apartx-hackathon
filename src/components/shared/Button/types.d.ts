import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

export interface ButtonProps
  extends PropsWithChildren,
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  isError?: boolean;
}
