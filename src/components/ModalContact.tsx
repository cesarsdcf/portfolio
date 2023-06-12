import { X } from 'lucide-react'
import React from 'react'
import { FormContact } from './FormContact'
type Props = {
  onClose : ()=> void,
  open: boolean
}
export const ModalContact = ({ onClose, open }: Props) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
      <div 
      onClick={e => e.stopPropagation()}
      className={`overflow-auto w-screen h-screen md:h-[100%] md:w-[700px] bg-white rounded-xl shadow py-[50px] px-[45px] transition-all ${open ? "scale-100 apacity-100" : "scape-125 opacity-0"}`}>
        <FormContact />
      <button onClick={onClose} className='absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white  hover:text-gray-600'><X /></button>
      </div>
    </div>
  )
}
