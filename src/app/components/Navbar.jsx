import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <ul className='flex md:flex-row flex-col justify-evenly md:h-[80px] h-screen bg-slate-950 items-center text-white font-semibold'>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
            <li>
                <Link href='/getstarted' className='bg-green-900 py-2 px-4 rounded-md shadow-lg text-center text-white'>Get Started</Link>
            </li>
        </ul>
    </nav>
  )
}
