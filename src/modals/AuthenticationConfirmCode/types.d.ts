import type { IModal } from '@/types';

export interface AuthenticationConfirmCodeProps extends IModal {
  onClickButton(): void;
}
