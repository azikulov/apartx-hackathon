import { create } from 'zustand';

type State = { isAuth: boolean };
type Action = { updateAuth: (isAuth: boolean) => void };

const isAuthLocal =
  typeof window !== 'undefined'
    ? Boolean(sessionStorage.getItem('isAuth'))
    : false;

export const useAuthStore = create<State & Action>((set) => ({
  isAuth: isAuthLocal,
  updateAuth: (isAuth) => {
    set({ isAuth });

    if (sessionStorage) {
      sessionStorage.setItem('isAuth', String(isAuth));
    }
  },
}));
