import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Link2 } from 'react-feather';
import { Project } from '../../interfaces';
import { FadeUpVariantsItem } from '../../lib/utils/animations';

const WorkItem: React.FC<Project> = ({
  title,
  image,
  link,
  technologies,
  description,
}) => {
  const techArray = technologies.split(',');

  return (
    <motion.div className='post-box mb-8' variants={FadeUpVariantsItem}>
      <div className='bg-white grid grid-cols-1 shadow-lg hover:shadow-xl transition-all duration-300'>
        <div>
          <Image width={650} height={520} alt={title} src={`/${image}`} />
        </div>
        <div className='p-6'>
          <h2 className='text-black text-xl font-bold mb-2'>{title}</h2>
          <p className='text-black mb-4'>{description}</p>
          <Link href={link} className='text-amber-500' target='_blank'>
            Visit web site <Link2 className='inline-flex' />
          </Link>
          <ul className='mt-2 flex flex-wrap' aria-label='Technologies used:'>
            {techArray.map((tech) => (
              <li key={tech} className='mr-1.5 mt-2'>
                <div className='flex items-center rounded-full bg-blue-400/20 px-3 py-1 text-xs font-medium leading-5 text-blue-400 '>
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkItem;
