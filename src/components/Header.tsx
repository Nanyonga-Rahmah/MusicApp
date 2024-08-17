import React from 'react'
import Search from './Search'
import { Button } from './ui/button'
import Link from 'next/link'



function Header() {
  return (
    <div className='flex justify-between w-full bg-gray-700 col-span-5 p-4 h-[70px] '>
        <Search/>

        <div className='flex gap-4'>
        <Button variant='outline'  className='w-28' ><Link href='/login'>Login</Link></Button>
          <Button variant='outline' className='w-28'><Link href='/register'>Regitser</Link></Button>
        
          
        </div>
    </div>
  
  )
}

export default Header