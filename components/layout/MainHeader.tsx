import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Hamburguer from '../ui/Hamburguer';

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
    }

    // Initial check
    checkWindow();

    // Resize check
    window.addEventListener('resize', checkWindow);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', checkWindow);
    }
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

  const menuWraperVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      }
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      }
    },
  }

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: 30,
    },
    transition: {
      duration: 1,
      type: 'spring',
    },
  }

  return (
    <header
      id='site-header'
      className={`${isHome ? 'fixed' : 'sticky'
        } w-full top-0 z-50 transition-all duration-300 shadow-lg bg-white`}
    >
      <div className='container mx-auto flex-1 py-4 lg:py-6'>
        <nav className='flex items-center justify-between flex-wrap'>
          <div className='w-full flex flex-wrap items-center justify-between mx-auto'>
            <motion.a
              href='/'
              className='flex items-center'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
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
              <motion.ul variants={itemVariants} className='font-bold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0'>
                {RoutesList.map(([title, url]) => (
                  <motion.a
                    key={title}
                    href={url}
                    className='md:inline-block py-4 lg:py-2 uppercase text-md text-center text-black'
                    onClick={closeMenu}
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
