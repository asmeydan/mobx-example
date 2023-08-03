import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' h-screen flex flex-col justify-center items-center gap-5 '>
      <Link href="counter" className=' border border-black px-6 py-3 rounded-full text-xl hover:bg-black hover:text-white' >Counter</Link>
      <Link href="shopping-list" className=' border border-black px-6 py-3 rounded-full text-xl hover:bg-black hover:text-white'  >Shopping List</Link>
    </main>
  )
}
