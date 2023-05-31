import Image from 'next/image'
import React from 'react'

export const GridProjects = () => {
  return (
    <div className='flex flex-col mt-[100px] max-w-[830px] gap-12 w-full font-light text-gray-300'>
      <div className='flex flex-col bg-white shadow-box-proj rounded-lg md:flex-row md:items-center'>
        <div className='bg-slate-700 md:w-[50%] h-[300px] rounded-lg'>
        </div>
        <div className='flex flex-col items-center justify-between p-8 text-center'>
          <div className='md:mt-12'>
            <h3 className='text-xl font-semibold mb-2 text-gray-500'>Nome do Projeto</h3>
            <p className='text-gray-300'>Lorem ipset, ducimus magni, molestiae iusto</p>
          </div>
          <a className='font-bold cursor-pointer text-white bg-gradient-to-r from-cyan-500 shadow-box-proj to-blue-500 mt-12 py-3 w-full rounded-xl text-xs tracking-widest hover:opacity-[0.9] duration-150'>VER PROJETO</a>
        </div>
      </div>
      <div className='flex flex-col-reverse bg-white shadow-box-proj rounded-lg md:flex-row md:items-center justify-between'>
        <div className='flex flex-col items-center justify-between p-8 text-center'>
          <div className='md:mt-12'>
            <h3 className='text-xl font-semibold mb-2 text-gray-500'>Nome do Projeto</h3>
            <p className='text-gray-300'>Lorem ipset, ducimus magni, molestiae iusto</p>
          </div>
          <a className='font-bold text-white cursor-pointer bg-gradient-to-r from-pink-500 to-yellow-500 shadow-box-proj mt-12 py-3 w-full rounded-xl text-xs tracking-widest hover:opacity-[0.9] duration-150'>VER PROJETO</a>
        </div>
        <div className='bg-slate-700 md:w-[50%] h-[300px] rounded-lg'>

        </div>
      </div>
      <div className='flex flex-col bg-white shadow-box-proj rounded-lg md:flex-row md:items-center'>
        <div className='relative bg-slate-700 md:w-[50%] h-[300px] rounded-lg'>
        </div>
        <div className='flex flex-col items-center justify-between p-8 text-center'>
          <div className='md:mt-12'>
            <h3 className='text-xl font-semibold mb-2 text-gray-500'>Nome do Projeto</h3>
            <p className='text-gray-300'>Lorem ipset, ducimus magni, molestiae iusto</p>
          </div>
          <a className='font-bold cursor-pointer text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-box-proj mt-12 py-3 w-full rounded-xl text-xs tracking-widest hover:opacity-[0.9] duration-150'>VER PROJETO</a>
        </div>
      </div>
    </div>
  )
}
