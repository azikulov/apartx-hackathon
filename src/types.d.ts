import type { PropsWithChildren } from 'react';

export interface IChild extends PropsWithChildren {}

export interface IModal {
  onClose(): void;
}

export type DashboardSwitcher = 'active' | 'at work' | 'completed' | 'offers';

export type Registration = {
  avatar?: string | ArrayBuffer | FormDataEntryValue | null;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  password?: string;
};
