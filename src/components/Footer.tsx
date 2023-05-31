import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { ButtonContact } from "./ButtonContact"

export const Footer = () => {

  return (
    <>
      <div className="bg-[url('../assets/d-footer.svg')] bg-center bg-cover bg-no-repeat h-[150px]"/>
      <footer className="bg-blue-950 text-gray-50 h-64 flex flex-col justify-center items-center">
        <ButtonContact />
        <div className="flex mt-8 justify-center items-center gap-9">
          <div className="bg-white p-2 rounded-full text-gray-600 hover:bg-gray-50 cursor-pointer">
            <Link target="_blank" href="https://www.instagram.com/cesarsdcf/">
              <Instagram />
            </Link>
          </div>
          <div className="bg-white p-2 rounded-full text-gray-600 hover:bg-gray-50 cursor-pointer">
            <Link target="_blank" href="https://www.linkedin.com/in/cesar-silva-950126232/">
              <Linkedin />
            </Link>
          </div>
          <div className="bg-white p-2 rounded-full text-gray-600 hover:bg-gray-50 cursor-pointer">
          <Link target="_blank" href="https://github.com/cesarsdcf">
            <Github />
          </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
