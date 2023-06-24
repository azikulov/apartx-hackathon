'use client';
import { createContext, useContext, useState } from 'react';
import type { Modals, initialValue } from './types';
import type { IChild } from '@/types';

const Context = createContext({} as initialValue);

export function useModalsContext() {
  return useContext(Context);
}

export function ModalsProvider({ children }: IChild) {
  const [modals, setModals] = useState({
    authentication: false,
    authenticationConfirmCode: false,
    registration: false,
    registrationConfirmCode: false,
  } as Modals);

  function updateModal(value: {
    key:
      | 'authentication'
      | 'authenticationConfirmCode'
      | 'registration'
      | 'registrationConfirmCode';
    value: boolean;
  }) {
    setModals((prev) => ({ ...prev, [value.key]: value.value }));
  }

  return (
    <Context.Provider
      value={{
        modals,
        updateModal,
      }}
    >
      {children}
    </Context.Provider>
  );
}
