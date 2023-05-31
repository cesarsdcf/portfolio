'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export const ModalContext = createContext<any>(null);

export const ModalContextProvider = ({children}: { children: ReactNode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
        {children}
    </ModalContext.Provider>
  );
}