import type { IModal } from '@/types';

export interface AuthenticationProps extends IModal {
  onClickButton(): void;
}
