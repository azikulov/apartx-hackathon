import type { IModal } from '@/types';

export interface AuthenticationConfirmCodeProps extends IModal {
  onClickButton(): void;
}

export type FormDataType = {
  email: string | undefined;
  code: number | undefined;
};
