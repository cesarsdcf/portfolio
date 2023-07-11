import { SmilePlus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const GridProjects = () => {
  return (

    <div className='flex flex-col mt-[100px] max-w-[830px] gap-12 w-full font-light text-gray-300'>
      <div className='flex flex-col bg-white shadow-box-proj rounded-lg md:flex-row md:items-center'>
        <div className='md:min-w-[50%] h-[200px] rounded-lg relative flex items-center justify-center'>
          <SmilePlus className='text-black w-40 h-40' />
        </div>
        <div className='flex flex-col items-center justify-between p-8 text-center'>
          <div className='md:mt-12'>
            <h3 className='text-4xl font-bold mb-2 text-gray-500'>Ijome</h3>
            <p className='text-gray-300'>Uma rede social que só pode postar emojis feita com NextJs, TailwindCss e Prisma.</p>
          </div>
          <a href="https://github.com/cesarsdcf/todo-react" className='font-bold cursor-pointer text-white bg-gradient-to-r from-orange-700 shadow-box-proj to-orange-500 mt-12 py-3 w-full rounded-xl text-xs tracking-widest hover:opacity-[0.9] duration-150'>VER PROJETO</a>
        </div>
      </div>


      <div className='flex flex-col bg-white shadow-box-proj rounded-lg md:flex-row-reverse md:items-center justify-between'>
        <div className='md:min-w-[50%] h-[300px] rounded-lg relative'>
          <Image src="/netflix-logo.png" alt="Clone da Interface do Nextflix" fill className="object-contain rounded-lg" />
        </div>
        <div className='flex flex-col items-center justify-between p-8 text-center'>
          <div className='md:mt-12'>
            <h3 className='text-3xl font-bold mb-2 text-gray-500'>Clone UI da Netflix </h3>
            <p className='text-gray-300'>Um clone da interface do Netflix usando React/Nextjs, TypeScript, Styled-Components e usando a API do TMDB.</p>
          </div>
          <a href="https://github.com/cesarsdcf/clone-netflix/" className='font-bold text-white cursor-pointer bg-gradient-to-r from-red-500 to-red-700 shadow-box-proj mt-12 py-3 w-full rounded-xl text-xs tracking-widest hover:opacity-[0.9] duration-150'>VER PROJETO</a>
        </div>
      </div>


      <div className='flex flex-col bg-white shadow-box-proj rounded-lg md:flex-row md:items-center'>
        <div className='relative md:min-w-[50%] h-[300px] rounded-lg'>
          <Image src="/form.png" alt="Clone da Interface do Nextflix" fill className="object-contain rounded-lg p-12" />
        </div>
        <div className='flex flex-col items-center justify-between p-8 text-center'>
          <div className='md:mt-12'>
            <h3 className='text-2xl font-semibold mb-2 text-gray-500'>Formulário com Etapas</h3>
            <p className='text-gray-300'>Um formulário com multi etapas feita com React/NextJs, TypeScript e Styled-Components.</p>
          </div>
          <a href="clone-netflix-cesarsdcf.vercel.app" className='font-bold cursor-pointer text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-box-proj mt-12 py-3 w-full rounded-xl text-xs tracking-widest hover:opacity-[0.9] duration-150'>VER PROJETO</a>
        </div>
      </div>
    </div>
  )
}
