import type { PropsWithChildren } from 'react';

export interface IChild extends PropsWithChildren {}

export type DashboardSwitcher = 'active' | 'at work' | 'completed' | 'offers';
