import React from 'react'
import Search from './Search'
import { Button } from './ui/button'
import Link from 'next/link'



function Header() {
  return (
    <div className='flex justify-between bg-black col-span-5 p-4 h-min '>
        <Search/>

        <div className='flex gap-3'>
        <Button variant='outline'  className='w-28' ><Link href='/login'>Login</Link></Button>
          <Button variant='outline' className='w-28'><Link href='/register'>Regitser</Link></Button>
        
          
        </div>
    </div>
  
  )
}

export default Header