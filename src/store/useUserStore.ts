import { create } from 'zustand';
import { Registration } from '@/types';

type State = { state: Registration };
type Action = { updateState: (data: Registration) => void };

export const useUserStore = create<State & Action>((set) => ({
  state: {},
  updateState: (data) => {
    set((store) => ({ state: { ...store.state, ...data } }));
  },
}));
