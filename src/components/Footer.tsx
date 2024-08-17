import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function Footer() {
  return (
    <div className=' z-20  fixed bottom-0 flex flex-col items-center md:flex-row justify-between w-full p-4 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500  '>
        <div className='text-white text-center md:text-left'>
            <h3 className='font-bold'>Preview of GDMuzik</h3>
            <p className='text-sm md:text-[18px]'>Sign Up to download unlimitted Songs and personalized playlists.It is entirely free</p>
        </div>
       <Link href='/register ' className='mt-4'> <Button className='bg-white text-black font-bold mr-5 '>Register</Button></Link>
    </div>
  )
}

export default Footer