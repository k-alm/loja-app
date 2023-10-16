import './globals.css'
import { Inter } from 'next/font/google'
import {Link} from 'react-dom'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Entrega 4',
  description: '1TDSPM - Entrega 4',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <header>
        <nav>
          <Link href=''>MAMÃO</Link>
          <Link href=''>MANGA</Link>
          <Link href=''>MELÃO</Link>
        </nav>
      </header>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
