import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'password' | 'tel' | 'image' | 'date';
  errorMessage?: string;
}
