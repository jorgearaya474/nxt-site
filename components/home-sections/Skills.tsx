import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  FadeUpVariantsContainer,
  FadeUpVariantsItem,
} from '../../lib/utils/animations';

const skills_arr = [
  ['React', 'react'],
  ['PHP', 'php'],
  ['Python', 'python'],
  ['Flask', 'flask'],
  ['NextJs', 'nextjs'],
  ['WordPress', 'wordpress'],
  ['Sass', 'sass'],
  ['TypeScript', 'typescript'],
  ['Bootstrap', 'bootstrap'],
  ['Figma', 'figma'],
  ['JavaScript', 'javascript'],
  ['Tailwind', 'tailwind'],
  ['Mysql', 'mysql'],
  ['Git', 'git'],
];

const Skills: React.FC = () => {
  const skillsList = useRef(null)
  const isInView = useInView(skillsList, { once: true })

  return (
    <div>
      <h3 className='text-black font-bold text-2xl mb-2'>My Tech Stack</h3>
      <motion.ul role='list' className='columns-2 md:columns-3 space-y-4 text-slate-400 mt-4' ref={skillsList} variants={FadeUpVariantsContainer} initial="hidden" animate={isInView ? 'visible' : ''}>
        {skills_arr.map(([title, icon]) => (
          <motion.li key={icon} className='flex text-black text-lg items-center bg-gray-100 p-3 hover:bg-gray-200' variants={FadeUpVariantsItem}>
            <Image
              src={`/icons/${icon}.svg`}
              alt={title}
              width={30}
              height={30}
              className='mr-2'
              loading='lazy' />
            {title}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Skills;
