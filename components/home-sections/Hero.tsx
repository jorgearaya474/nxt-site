import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, GitHub } from 'react-feather';

const Hero: React.FC = () => {
  return (
    <div id='section_intro' className='home-section flex justify-center items-center mt-10'>
      <div className='container'>
        <div className='grid gap-2 md:gap-12 grid-cols-1 md:grid-cols-2'>
          <div className='order-2'>
            <h1 className='text-bold text-3xl md:text-4xl block mt-1 mb-5 font-black text-black text-left'>
              <span className='md:block text-3xl'>Hello, I&apos;m</span> Jorge Araya
            </h1>
            <p className='text-black text-xl mb-3 leading-8 text-left mb-4'>
              I&apos;m a creative web developer from Costa Rica, specialized in <b>JavaScript</b>, <b>React</b> and <b>Wordpress</b>.
              Passionated about design and technology, I&apos;m dedicated to creating innovative and engaging web applications.
            </p>

            <div className='my-3 flex gap-2'>
              <Link href='mailto:jorgearaya474@gmail.com' className='px-3 py-2 font-bold text-white bg-black hover:bg-orange-500 transition ease-in-out duration-150'>
                Contact me
              </Link>
              <Link href='https://www.linkedin.com/in/jorgearayadev' className='flex items-center justify-center px-3 py-2 font-bold text-white bg-black hover:bg-orange-500 transition ease-in-out duration-150'>
                <Linkedin size={19} />
              </Link>
              <Link href='https://github.com/jorgearaya474' className='flex items-center justify-center px-3 py-2 font-bold text-white bg-black hover:bg-orange-500 transition ease-in-out duration-150'>
                <GitHub size={19} />
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center order-1 md:order-2 mb-3'>
            <Image
              src='/images/jorge-araya-profile-photo.jpg'
              alt='Picture of the author'
              width={400}
              height={400}
              className='border-4 border-black shadow'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
