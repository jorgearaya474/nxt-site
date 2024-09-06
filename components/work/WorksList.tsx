import React from 'react';
import { motion } from 'framer-motion';
import WorkItem from './WorkItem';
import { Projects } from '../../interfaces';
import { FadeUpVariantsContainer } from '../../lib/utils/animations';

const WorksList: React.FC<Projects> = ({ projects }) => {
  return (
    <div data-testid='projects-list' className='col-span-6 md:col-span-4'>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-8'
        variants={FadeUpVariantsContainer}
        initial='hidden'
        animate='visible'
      >
        {projects.map((project) => (
          <WorkItem
            key={project.slug}
            slug={project.slug}
            title={project.title}
            image={project.image}
            link={project.link}
            technologies={project.technologies}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default WorksList;
