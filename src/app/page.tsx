import { About } from "@/components/About";
import { FixedButton } from "@/components/FixedButton";
import { Projects } from "@/components/Projects";
import { Tecs } from "@/components/Tecs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-10 md:p-24 bg-gradient-to-b from-white via-blue-50 to-blue-50">
      <About />
      <Tecs />
      <Projects />
      <FixedButton/>
    </main>
  )
}
