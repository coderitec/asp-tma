import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Main() {
  return (
    <main className='flex md:flex-row flex-col'>
        <div>
            <h1 className='capitalize text-6xl font-semibold'>Manage your tasks Quickly</h1>
            <p>Effectively manage your tasks daily, weekly or even yearly, not missing out on anything.</p>
            <button>
                <Link href={'/getstarted'} className='bg-green-900 py-2 px-4 rounded-md shadow-lg text-center text-white'>Get started</Link>
            </button>
        </div>
        <div>
            <Image src='/task-head.jpg' alt="manage your tasks" width='500' height='500'/>

        </div>
    </main>
  )
}
