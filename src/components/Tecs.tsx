import { GridTecs } from "./GridTecs"

export const Tecs = () => {
  return (
    <section id="tecs" className="text-center text-gray-700">
      <h1 className="font-bold text-4xl sm:text-5xl  tracking-tight">
        Principais tecnologias
      </h1>
      <p className="font-extralight relative mt-3 before:block before:absolute before:w-[50px] before:-inset-3 before:border-b-2 before:m-auto before:border-green-500">Tecnologias em que estou trabalhando/estudando hoje em dia</p>
      <GridTecs />
    </section>
  )
}
