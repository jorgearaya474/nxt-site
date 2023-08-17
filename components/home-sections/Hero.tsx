import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, GitHub } from 'react-feather';

const Hero: React.FC = () => {
  return (
    <section id='section_hero' className='home-section flex justify-center items-center bg-gradient-to-r from-blue-950 to-sky-900 overflow-hidden lg:h-screen relative'>
      <div className='container'>
        <div className="grid max-w-screen-xl py-20 mx-auto gap-8 lg:py-24 lg:grid-cols-12">
          <div className='order-2 lg:order-2 mr-auto place-self-center lg:col-span-7 fadeInUp-animation z-1 relative'>
            <h1 className='text-bold text-3xl lg:text-5xl block mt-1 mb-1 font-bold text-white text-left'>
              <span className='block text-2xl'>Hello, I&apos;m</span> <span className='uppercase'>Jorge Araya</span>
            </h1>
            <h2 className='font-bold text-2xl mb-3 text-amber-500'>Full Stack Web Developer</h2>
            <p className='text-white text-lg mb-3 leading-8 text-left mb-4'>
              I&apos;m a creative developer from Costa Rica, specializing in <b>JavaScript</b>, <b>React</b>, and <b>WordPress</b>. Passionate about design and technology, I&apos;m dedicated to creating innovative and engaging web applications.
            </p>
            <div className='my-3 flex gap-2'>
              <Link href='mailto:jorgearaya474@gmail.com' className='px-3 py-2 font-bold text-blue-950 bg-amber-500 hover:bg-orange-500 transition ease-in-out duration-150'>
                Contact me
              </Link>
              <Link href='https://www.linkedin.com/in/jorgearayadev' className='flex items-center justify-center px-3 py-2 font-bold text-blue-950 bg-amber-500 hover:bg-orange-500 transition ease-in-out duration-150'>
                <Linkedin size={19} />
              </Link>
              <Link href='https://github.com/jorgearaya474' className='flex items-center justify-center px-3 py-2 font-bold text-blue-950 bg-amber-500 hover:bg-orange-500 transition ease-in-out duration-150'>
                <GitHub size={19} />
              </Link>
            </div>
          </div>
          <div className='order-1 lg:order-2 lg:col-span-5 mb-10 lg-mb-0 mx-auto relative fadeInUp-animation'>
            <Image
              src='/images/jorge-araya-dev-profile-picture.jpeg'
              alt='Picture of the author'
              width={400}
              height={400}
              className='max-w-[240px] lg:max-w-full relative z-10'
              loading='lazy'
            />
            <div className='absolute bg-amber-500 w-full h-full top-4 lg:top-8 left-4 lg:left-8 z-1'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
