import type { IModal } from '@/types';

export interface RegistrationConfirmCodeProps extends IModal {
  onClickButton(): void;
}

export type FormData = {
  email: string | undefined;
  code: number | undefined;
};
