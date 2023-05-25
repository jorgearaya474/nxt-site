import React from 'react';
import Image from 'next/image';

const imageStyle = {
  marginRight: '.8rem',
};

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
  ['TailWind', 'tailwind'],
  ['Mysql', 'mysql'],
  ['Git', 'git'],
];

const Skills: React.FC = () => {
  return (
    <div>
      <h3 className='text-black font-bold text-xl mb-2'>My Skills</h3>
      <ul role='list' className='md:columns-3 space-y-4 text-slate-400 mt-4'>
        {skills_arr.map(([title, icon]) => (
          <li key={icon} className='flex text-black items-center bg-gray-100 p-3'>
            <Image
              src={`/icons/${icon}.svg`}
              alt={title}
              width={30}
              height={30}
              style={imageStyle}
              loading='lazy' />
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
