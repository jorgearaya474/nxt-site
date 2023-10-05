import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, GitHub } from 'react-feather';
import { motion } from 'framer-motion';

const frameVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.05,
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring'
    }
  }
};

const Hero: React.FC = () => {
  return (
    <section
      id='section_hero'
      className='grid-background flex justify-center items-center  bg-gradient-to-r from-blue-950 to-sky-900 overflow-hidden lg:h-screen relative'
    >
      <div className='container'>
        <div className='grid max-w-screen-xl py-20 mx-auto gap-8 lg:py-24 lg:grid-cols-12'>
          <motion.div className='order-2 lg:order-2 mr-auto place-self-center lg:col-span-7 z-1 relative' variants={frameVariants} initial='hidden' animate='visible'>
            <motion.h1
              className='text-bold text-3xl lg:text-5xl block mt-1 mb-1 font-bold text-white text-left'
              variants={itemVariants}
            >
              <span className='block text-2xl'>Hello, I&apos;m</span>{' '}
              <span className='uppercase'>Jorge Araya</span>
            </motion.h1>
            <motion.h2 className='font-bold text-2xl mb-3 text-amber-500' variants={itemVariants}>
              Full Stack Web Developer
            </motion.h2>
            <motion.p className='text-white text-lg mb-3 leading-8 text-left mb-4' variants={itemVariants}>
              I&apos;m a creative developer from Costa Rica, specializing in{' '}
              <b>JavaScript</b>, <b>React</b>, and <b>WordPress</b>. Passionate
              about design and technology, I&apos;m dedicated to creating
              innovative and engaging web applications.
            </motion.p>

            <motion.div className='my-3 flex gap-2' variants={frameVariants} initial='hidden' animate='visible'>
              <motion.a
                href='mailto:jorgearaya474@gmail.com'
                className='px-3 py-2 font-bold text-blue-950 bg-amber-500 hover:bg-orange-500'
                title='Contact Jorge'
                variants={itemVariants}
              >
                Contact me
              </motion.a>
              <motion.a
                href='https://www.linkedin.com/in/jorgearayadev'
                target='_blank'
                className='flex items-center justify-center px-3 py-2 font-bold text-blue-950 bg-amber-500 hover:bg-orange-500'
                title='Jorge Araya LinkedIn'
                variants={itemVariants}
              >
                <Linkedin size={19} />
              </motion.a>
              <motion.a
                href='https://github.com/jorgearaya474'
                target='_blank'
                className='flex items-center justify-center px-3 py-2 font-bold text-blue-950 bg-amber-500 hover:bg-orange-500'
                title='Jorge Araya Github'
                variants={itemVariants}
              >
                <GitHub size={19} />
              </motion.a>
            </motion.div>
          </motion.div>
          <div className='order-1 lg:order-2 lg:col-span-5 mb-10 lg-mb-0 mx-auto relative'>
            <motion.img
              src='/images/jorge-araya-dev-profile-picture.jpeg'
              alt='Picture of the author'
              width={400}
              height={400}
              className='max-w-[240px] lg:max-w-full relative z-10'
              loading='lazy'
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', duration: 1 }}
            />
            <motion.div
              className='absolute bg-amber-500 w-full h-full top-0 z-1'
              initial={{ y: 0, x: 0, opacity: 0 }}
              animate={{ y: 20, x: 20, opacity: 1 }}
              transition={{ duration: 2, delay: .5 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
