import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Link2 } from 'react-feather';
import { Project } from '../../interfaces';
import { FadeUpVariantsItem } from '../../lib/utils/animations';

const WorkItem: React.FC<Project> = ({ title, image, link, technologies }) => {
  const techArray = technologies.split(',');

  return (
    <motion.div
      className='bg-white content-start grid grid-cols-1 shadow-xl'
      variants={FadeUpVariantsItem}
    >
      <Link
        href={link}
        title={title}
        target='_blank'
        className='relative group'
      >
        <Image width={650} height={520} alt={title} src={`/${image}`} />
        <div className='opacity-0 group-hover:opacity-100 transition-opacity p-6 absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent z-10'>
          <ul className='mt-2 flex flex-wrap' aria-label='Technologies used:'>
            {techArray.map((tech) => (
              <li key={tech} className='mr-1.5 mt-2'>
                <div className='flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-blue-950 bg-amber-500 '>
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.div>
  );
};

export default WorkItem;
