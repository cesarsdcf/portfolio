import React from 'react'
import { GridProjects } from './GridProjects'

export const Projects = () => {
  return (
    <section className='mt-[100px] w-full flex flex-col justify-center items-center'>
      <h1 id="projects"  className="font-bold text-4xl sm:text-5xl  tracking-tight text-center text-gray-700">
        Projetos
      </h1>
      <p className="font-extralight relative mt-3 before:block before:absolute before:w-[50px] before:-inset-3 before:border-b-2 before:m-auto before:border-yellow-500">
        Alguns dos meus projetos pessoais
      </p>
      <GridProjects />
    </section>
  )
}
