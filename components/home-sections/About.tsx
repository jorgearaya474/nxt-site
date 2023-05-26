import React from 'react';
import Skills from './Skills';

const About: React.FC = () => {
  return (
    <div id='section_about' className='home-section flex justify-center items-center bg-white py-7'>
      <div className='container'>
        <div className='mb-5'>
          <h2 className='text-black font-bold text-2xl'>About me</h2>
        </div>
        <div className='grid gap-2 md:gap-12 grid-cols-1'>
          <div>
            <p className='text-black text-xl mb-3 leading-8 text-justify'>
              I am a web developer with a passion for creating intuitive and engaging websites. With over seven years of experience in the industry, I have had the opportunity to work on a variety of projects. This diverse experience has allowed me to develop a strong skill set in popular tools and technologies such as WordPress, React, Python, and PHP.
            </p>
            <p className='text-black text-xl mb-3 leading-8 text-justify'>
              I enjoy being up to date with the latest technologies and trends, expanding my knowledge. I&apos;m always eager to take on new challenges and excited to see where my career as a developer takes me.
            </p>
            <p className='text-black text-xl mb-3 leading-8 text-justify'>
              Outside of the digital world, I am an avid nature lover and traveler. Exploring the beauty of the outdoors and embarking on adventures is one of my greatest joys.
            </p>
            <p className='text-black text-xl mb-2 leading-8 text-justify'>
              In addition to my love for nature, I&apos;m a true coffee lover, who appreciates the art of brewing a perfect cup of coffee.
            </p>
          </div>
          <div>
            <Skills />
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default About;
