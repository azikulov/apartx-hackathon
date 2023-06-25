import { create } from 'zustand';

type State = {
  avatar?: string;
  email?: string;
  first_name?: string;
  groups?: string[];
  id?: number;
  is_active?: boolean;
  is_staff?: boolean;
  is_superuser?: boolean;
  is_verified?: boolean;
  last_login?: string;
  last_name?: string;
  password?: string;
  phone_number?: string;
  role?: string;
  user_permissions?: string[];
};

type Action = { updateUser: (data: State) => void };

export const useUserDataStore = create<State & Action>((set) => ({
  updateUser: (data) => {
    set((store) => ({ ...store, ...data }));
  },
}));
