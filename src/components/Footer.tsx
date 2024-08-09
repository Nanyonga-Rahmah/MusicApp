import React from 'react'
import { Button } from './ui/button'

function Footer() {
  return (
    <div className='fixed bottom-0 flex justify-between w-full p-4 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 z-20 '>
        <div className='text-white'>
            <h3 className='font-bold'>Preview of GDMuzik</h3>
            <p className='text-sm'>Sign Up to download unlimitted Songs and personalized playlists.It is entirely free</p>
        </div>
        <Button className='bg-white text-black font-bold '>Register</Button>
    </div>
  )
}

export default Footer