'use client'

import { ModalContext } from '@/contexts/formContact/context'
import React, { useContext } from 'react'

export const ButtonContact = () => {
  const {modalIsOpen, setModalIsOpen} = useContext(ModalContext)

  return (
    <button 
    className={`font-semibold mt-12 bg-red-500 py-4 px-10 rounded-md text-sm tracking-widest hover:bg-red-700 duration-150 text-white`}
    onClick={() => setModalIsOpen(!modalIsOpen)}
    >CONTATO</button>
  )
}
