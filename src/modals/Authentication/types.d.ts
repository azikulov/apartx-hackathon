import type { IModal } from '@/types';

export interface AuthenticationProps extends IModal {
  onClickButton(): void;
}

export type FormDataType = {
  email: string | undefined;
  password: string | undefined;
};
