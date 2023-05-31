import { JsIcon } from "./icons/JsIcon"
import { NextIcon } from "./icons/NextIcon"
import { NodeIcon } from "./icons/NodeIcon"
import { ReactIcon } from "./icons/ReactIcon"
import { StyledCIcon } from "./icons/StyledCIcon"
import { TSIcon } from "./icons/TSIcon"
import { TailwindIcon } from "./icons/TailwindIcon"

export const GridTecs = () => {
  return (
    <div className="w-full font-light text-gray-300">
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-[100px]">
        <div className="flex flex-col gap-4 w-full items-center">
          <div className="w-[60%] md:w-[185px] h-[110px] bg-white shadow-box-tecs flex items-center flex-col justify-center rounded-lg p-4">
            <StyledCIcon />
            <p className="mt-1">Styled Components</p>
          </div>
          <div className="w-[80%] md:w-[185px] h-[110px] bg-white shadow-box-tecs flex items-center flex-col justify-center rounded-lg p-4">
            <TailwindIcon />
            <p className="mt-1">TailwindCss</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <div className="w-[100%] md:w-[185px] h-[110px] bg-white shadow-box-tecs flex items-center flex-col justify-center rounded-lg p-4">
            <TSIcon />
            <p className="mt-1">TypeScript</p>
          </div>
          <div className="w-[80%] md:w-[185px] h-[110px] bg-white shadow-box-tecs flex items-center flex-col justify-center rounded-lg p-4">
            <ReactIcon />
            <p className="mt-1">React</p>
          </div>
          <div className="w-[60%] md:w-[185px] h-[110px] bg-white shadow-box-tecs flex items-center flex-col justify-center rounded-lg p-4">
            <NextIcon />
          </div>
        </div>
        <div className="hidden flex-col gap-6 md:flex">
          <div className="w-[185px] h-[110px] bg-white shadow-box-tecs md:flex items-center flex-col justify-center rounded-lg p-4">
            <NodeIcon />
            <p className="mt-1">NodeJS</p>
          </div>
          <div className="w-[185px] h-[110px] bg-white shadow-box-tecs md:flex items-center flex-col justify-center rounded-lg p-4">
            <JsIcon />
            <p className="mt-1">JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  )
}
