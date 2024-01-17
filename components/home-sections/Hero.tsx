import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, GitHub } from 'react-feather';
import {
  FadeUpVariantsContainer,
  FadeUpVariantsItem,
  heroImageVariants,
  heroImageBackVariants,
} from '../../lib/utils/animations';

const Hero: React.FC = () => {
  return (
    <section
      id='section_hero'
      className='grid-background flex justify-center items-center overflow-hidden h-auto sm:h-screen xl:max-h-[75vh] relative'
    >
      <div className='container'>
        <div className='grid max-w-screen-xl py-20 mx-auto gap-8 lg:pt-40 lg:pb-26 lg:grid-cols-12'>
          <motion.div
            className='order-2 lg:order-2 mr-auto place-self-center lg:col-span-7 z-1 relative'
            variants={FadeUpVariantsContainer}
            initial='hidden'
            animate='visible'
          >
            <motion.h1
              className='text-bold text-3xl lg:text-5xl block mt-1 mb-1 font-bold text-white text-left'
              variants={FadeUpVariantsItem}
              initial='hidden'
              animate='visible'
            >
              <span className='block text-2xl'>Hello, I&apos;m</span>{' '}
              <span className='uppercase'>Jorge Araya</span>
            </motion.h1>
            <motion.h2
              className='font-bold text-2xl mb-3 text-amber-500'
              variants={FadeUpVariantsItem}
              initial='hidden'
              animate='visible'
            >
              Web Developer
            </motion.h2>
            <motion.p
              className='text-white text-lg mb-3 leading-8 text-left mb-4'
              variants={FadeUpVariantsItem}
              initial='hidden'
              animate='visible'
            >
              I&apos;m a developer from Costa Rica, passionate about JavaScript,
              React, and WordPress. Let&apos;s work together to bring your ideas
              to life.
            </motion.p>
            <motion.div
              className='my-3 flex gap-2'
              variants={FadeUpVariantsContainer}
              initial='hidden'
              animate='visible'
            >
              <motion.a
                href='mailto:jorgearaya474@gmail.com'
                className='px-3 py-2 font-bold text-blue-950 bg-amber-500 hover:bg-orange-500'
                title='Contact Jorge'
                variants={FadeUpVariantsItem}
              >
                Contact me
              </motion.a>
              <motion.a
                href='https://www.linkedin.com/in/jorgearayadev'
                target='_blank'
                className='flex items-center justify-center px-3 py-2 font-bold text-blue-950 bg-amber-500 hover:bg-orange-500'
                title='Jorge Araya LinkedIn'
                variants={FadeUpVariantsItem}
              >
                <Linkedin size={19} />
              </motion.a>
              <motion.a
                href='https://github.com/jorgearaya474'
                target='_blank'
                className='flex items-center justify-center px-3 py-2 font-bold text-blue-950 bg-amber-500 hover:bg-orange-500'
                title='Jorge Araya Github'
                variants={FadeUpVariantsItem}
              >
                <GitHub size={19} />
              </motion.a>
            </motion.div>
          </motion.div>
          <div className='order-1 lg:order-2 lg:col-span-5 mb-10 lg-mb-0 mx-auto relative'>
            <motion.img
              src='/images/jorge-araya-profile-picture-wp.png'
              alt='Picture of the author'
              width={400}
              height={400}
              className='max-w-[240px] lg:max-w-full relative z-10 shadow-[0_23px_32px_2px_rgba(0,0,0,0.5)]'
              loading='lazy'
              variants={heroImageVariants}
              initial='hidden'
              animate='visible'
            />
            <motion.div
              className='absolute bg-amber-500 w-full h-full top-0 z-1'
              variants={heroImageBackVariants}
              initial='hidden'
              animate='visible'
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
