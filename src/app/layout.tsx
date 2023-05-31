import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { ModalContextProvider } from '@/contexts/formContact/context'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Cesar Silva | Portifólio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <ModalContextProvider>
        <body className={`${inter.className}  text-gray-900 scroll-smooth`}>
          <Header />
          {children}
          <Footer />
        </body>
      </ModalContextProvider>
    </html>
  )
}
