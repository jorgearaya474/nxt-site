import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Hamburguer from '../ui/Hamburguer';
import {
  menuWraperVariants,
  menuItemVariants,
} from '../../lib/utils/animations';

const RoutesList = [
  ['Home', '/'],
  ['About', '/#section_about'],
  ['My Work', '/my-work'],
  ['Contact', '/#section_contact'],
  ['Blog', '/blog'],
];

const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navRouter = useRouter();
  const isHome = navRouter.pathname === '/';

  useEffect(() => {
    const checkWindow = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkWindow();

    // Resize check
    window.addEventListener('resize', checkWindow);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', checkWindow);
    };
  }, []);

  /**
   * Mobile menu toggle
   */
  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  /**
   * Close menu handler
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      id='site-header'
      className={`${
        isHome ? 'fixed' : 'sticky'
      } w-full top-0 z-50 transition-all duration-300 shadow-lg bg-white`}
    >
      <div className='container mx-auto flex-1 py-4 lg:py-6'>
        <nav className='flex items-center justify-between flex-wrap'>
          <div className='w-full flex flex-wrap items-center justify-between mx-auto'>
            <motion.a
              href='/'
              className='flex items-center'
              whileHover={menuItemVariants.hover}
              whileTap={menuItemVariants.tap}
            >
              <p className='font-bold text-2xl uppercase'>Jorge Araya</p>
            </motion.a>
            <Hamburguer isOpen={isMenuOpen} toggle={handleMenuToggle} />

            <motion.div
              className='w-full bg-white fixed bottom-0 top-14 left-0 md:top-0 md:relative md:block md:w-auto'
              id='navbar-default'
              variants={menuWraperVariants}
              initial='closed'
              animate={isMobile && !isMenuOpen ? 'closed' : 'open'}
            >
              <motion.ul
                variants={menuItemVariants}
                className='font-bold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0'
              >
                {RoutesList.map(([title, url]) => (
                  <motion.a
                    key={title}
                    href={url}
                    className='md:inline-block py-4 lg:py-2 uppercase text-md text-center text-black'
                    onClick={closeMenu}
                    whileHover={menuItemVariants.hover}
                    whileTap={menuItemVariants.tap}
                  >
                    {title}
                  </motion.a>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
