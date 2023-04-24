import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import FrontPage from '@/components/FrontPage'
import Works from '@/components/Works'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <FrontPage />
      <Works />
    </main>
  )
}
