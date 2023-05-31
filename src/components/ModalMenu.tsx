import { X } from "lucide-react"
import Link from "next/link"
import { useState } from "react";

type Props= {
  onClick: () => void
}

const ModalMenu = ({ onClick }:Props) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white text-gray-900">
      <X 
        className="absolute top-4 right-4 cursor-pointer"
        onClick={onClick}
      />
      <ul className="text-center flex flex-col gap-4">
        <li><Link onClick={onClick} href="/" className="hover:border-b-2 hover:border-blue-700 hover:text-gray-500">About</Link></li>
        <li><Link onClick={onClick} href="/" className="hover:border-b-2 hover:border-blue-700 hover:text-gray-500">Tecnologias</Link></li>
        <li><Link onClick={onClick} href="/" className="hover:border-b-2 hover:border-blue-700 hover:text-gray-500">Projetos</Link></li>
      </ul>
    </div>
  )
}

export default ModalMenu