'use client'

import { Menu } from "lucide-react"
import Link from "next/link"
import ModalMenu from "./ModalMenu"
import { useState } from "react"
import { ButtonContact } from "./ButtonContact"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <header className="relative bg-[url('../assets/grid-bg.png')] bg-blue-950 bg-center bg-cover bg-no-repeat h-screen leading-tight">
      <div className="flex justify-between items-center pt-8 absolute w-full md:justify-around px-[40px] md:px-0">
        <Link href="/" className="font-extrabold text-4xl text-gray-50">
          C
        </Link>
        <div className="hidden md:flex items-center ">
          <ul className="flex gap-8 text-xs tracking-widest">
            <li><Link href="#about" className="hover:text-gray-50 text-gray-200 duration-100">ABOUT</Link></li>
            <li><Link href="#tecs" className="hover:text-gray-50 text-gray-200 duration-100">TECNOLOGIAS</Link></li>
            <li><Link href="#projects" className="hover:text-gray-50 text-gray-200 duration-100">PROJETOS</Link></li>
          </ul>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)} ><Menu /></button>
      </div>
      <div className="flex flex-col h-full justify-center items-center ">
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white">Olá, Meu nome é <br />Cesar Silva</h1>
        <p className="mt-6 text-lg text-center max-w-3xl mx-auto text-slate-400">e sou desenvolvedor <span className="text-white">Front End</span></p>
        <ButtonContact />
      </div> 
      {isOpen &&
        <ModalMenu onClick={closeModal}/>
      }
    </header>
  )
}

export default Header