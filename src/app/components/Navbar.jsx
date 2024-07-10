"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import { SidebarContext } from '../providers'
import { FaHamburger } from "react-icons/fa";

export default function Navbar() {
    const {open, setOpen} = useContext(SidebarContext)

    function handleClose(){
        setOpen(!open)
    }
  return (
    <nav className='bg-slate-950 flex flex-col items-center justify-between md:h-[80px]  text-white'>
        <ul>
            <li className='md:hidden block cursor-pointer py-6' onClick={handleClose}>
                <FaHamburger />
            </li>
        </ul>
        <ul className={`flex md:flex-row md:gap-x-[120px] ${open ? 'flex-col h-screen': 'h-[80vh] md:flex hidden items-center'} justify-evenly space-x-4  items-center font-semibold`}>
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
