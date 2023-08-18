import React from 'react';
import WorkItem from './WorkItem';
import { Projects } from '../../interfaces';

const WorksList: React.FC<Projects> = ({ projects }) => {
  return (
    <div className='col-span-6 md:col-span-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <WorkItem
            key={project.slug}
            slug={project.slug}
            title={project.title}
            image={project.image}
            link={project.link}
            technologies={project.technologies}
            description={project.description} />
        ))}
      </div>
    </div>
  );
}

export default WorksList;
