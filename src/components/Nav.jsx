import React from 'react'
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full' >
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="" width={130} height={29} />
          Nike
        </a>
        <ul className='flex max-lg:hidden item-center  gap-16 justify-center flex-end'  >
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Contacts</li>
          <li>Sign In/</li>
          <li>Explore now</li>
        </ul>
        <div>
          <img src={hamburger} alt="Hambuger" width={25} height={25} className='hidden max-lg:block' />
        </div>
      </nav>
      
    </header>
  )
}

export default Nav
