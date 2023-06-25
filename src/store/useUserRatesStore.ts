import { create } from 'zustand';

type Rate = {
  id: number;
  review_text: string;
  rating: number;
  reviewer: number;
  reviewee: number;
  order: number;
};

type State = {
  rates?: Rate[];
};

type Action = { updateUserRates: (data: State) => void };

export const useUserRatesStore = create<State & Action>((set) => ({
  rates: [],
  updateUserRates: (data) => {
    set((store) => ({
      ...store,
      rates: data.rates,
    }));
  },
}));
