import React from 'react';
import { motion } from 'framer-motion';
import {
  FadeUpVariantsContainer,
  FadeUpVariantsItem,
  heroImageVariants,
  heroImageBackVariants
} from '../../lib/utils/animations';

interface MiniHeroProps {
  title: string
}

const MiniHero: React.FC<MiniHeroProps> = ({ title }) => {
  return <section className='grid-background flex justify-center items-center overflow-hidden lg:h-full relative'>
    <div className='container'>
      <div className="grid py-10 mx-auto lg:py-24">
        <motion.div variants={FadeUpVariantsContainer} initial='hidden' animate='visible'>
          <motion.h1 className='text-bold text-3xl lg:text-5xl block mt-1 mb-1 font-bold text-white text-left' variants={FadeUpVariantsItem}>
            {title}
          </motion.h1>
        </motion.div>
      </div>
    </div>
  </section>
}

export default MiniHero;
