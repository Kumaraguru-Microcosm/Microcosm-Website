import { useState } from 'react'
import Submenu from './Submenu'
import { useAtom } from 'jotai'
import { optionsAtom } from '../state'

const Navbar = () => {
  const [active, setActive] = useState(0)

  return (
    <div className='flex justify-between p-10'>
      <img src='/logo.svg' alt='logo' className='' />
      <div>
        <ul className='font-medium flex gap-12 text-md text-center'>
          <Submenu />
          <li>
            <button className='bg-black text-white py-2 px-5 rounded-md'>
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
