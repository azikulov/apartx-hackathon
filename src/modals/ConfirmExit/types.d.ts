import type { IModal } from '@/types';

export interface ConfirmExitProps extends IModal {
  onAcceptButton(): void;
  onRejectButton(): void;
}
