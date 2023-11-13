import React from 'react';
import { HamburgerProps } from '../../types';

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className='flex md:hidden flex-col justify-center items-center'
    >
      <span
        className={`bg-black block transition-all duration-200 ease-out h-0.5 w-6 ${
          isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
        }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-200 ease-out h-0.5 w-6 my-0.5 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-200 ease-out h-0.5 w-6 ${
          isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
