import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const RoutesList = [
  ['Home', '/'],
  ['About', '/#section_about'],
  ['My Work', '/my-work'],
  ['Contact', '#section_contact'],
  ['Blog', '/blog']
]

const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navRouter = useRouter();
  const isHome = navRouter.pathname === '/';

  /**
   * Mobile menu toggle
   */
  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  }

  /**
   * Close menu handler
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id='site-header' className={`${isHome ? 'fixed' : 'sticky'} w-full top-0 z-50 transition-all duration-300 shadow-lg bg-white`}>
      <div className='container mx-auto flex-1 py-2 lg:py-6'>
        <nav className='flex items-center justify-between flex-wrap'>
          <div className="w-full flex flex-wrap items-center justify-between mx-auto">
            <Link href='/' className='flex items-center'>
              <Image
                src='/images/jorge-araya-logo-black.png'
                alt='Jorge Araya Logo'
                width={167}
                height={20}
                className=''
                loading='lazy'
              />
            </Link>
            <button type="button" className='inline-flex items-center p-2 w-10 h-10 justify-center text-md md:hidden text-black' onClick={handleMenuToggle}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
              id='navbar-default'>
              <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0'>
                {RoutesList.map(([title, url]) => (
                  <Link key={title} href={url} className='md:inline-block py-4 lg:py-2 font-bold text-lg text-center text-black' onClick={closeMenu}>
                    {title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div >
    </header >
  );
}

export default MainHeader;
