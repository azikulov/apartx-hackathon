import { create } from 'zustand';

type State = { isAuth: boolean };
type Action = { updateAuth: (isAuth: boolean) => void };

const isAuthLocal = Boolean(localStorage.getItem('isAuth'));

export const useAuthStore = create<State & Action>((set) => ({
  isAuth: isAuthLocal,
  updateAuth: (isAuth) => {
    set({ isAuth });
    localStorage.setItem('isAuth', String(isAuth));
  },
}));
