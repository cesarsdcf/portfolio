'use client'

import { MailOpen } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from '@/contexts/formContact/context';
import { ModalContact } from './ModalContact';

export const FixedButton = () => {
  const {modalIsOpen, setModalIsOpen} = useContext(ModalContext)
  const [isScrollNearTop, setIsScrollNearTop] = useState(true);
  const [isScrollAtBottom, setIsScrollAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsScrollNearTop(scrollDistance <= 600);
      setIsScrollAtBottom(scrollDistance + windowHeight >= documentHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <button 
        onClick={() => setModalIsOpen(true)} 
        className={`fixed right-4 ${isScrollNearTop || isScrollAtBottom ? 'bottom-[-75px]': 'bottom-[15px]'} cursor-pointer bg-red-500 text-white p-4 rounded-full hover:bg-red-700 transition-all easy duration-500`}>
        <MailOpen />
      </button>
      <ModalContact open={modalIsOpen} onClose={() => setModalIsOpen(false)}/>
    </>
  )
}
