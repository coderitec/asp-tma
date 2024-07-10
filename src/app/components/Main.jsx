import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Main() {
  return (
    <main className='grid md:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-y-10 items-start'>
            <h1 className='capitalize text-5xl font-semibold'>Manage your tasks Quickly</h1>
            <p className='text-3xl'>Effectively manage your tasks daily, weekly or even yearly, not missing out on anything.</p>
            <button>
                <Link href={'/getstarted'} className='bg-green-900 py-2 px-4 rounded-md shadow-lg text-center text-white'>Create a task</Link>
            </button>
        </div>
        <div>
            <Image src='/another-task.jpg' alt="manage your tasks" width='500' height='500' className='rounded-full'/>

        </div>
    </main>
  )
}
