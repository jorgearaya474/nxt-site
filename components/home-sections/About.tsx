import React from 'react';
import Skills from './Skills';

const About: React.FC = () => {
  return (
    <section
      id='section_about'
      className='home-section flex justify-center items-center bg-white py-7 lg:py-24'
    >
      <div className='container'>
        <div className='mb-5'>
          <h2 className='text-black font-bold text-3xl'>About me</h2>
        </div>
        <div className='grid gap-2 md:gap-12 grid-cols-1'>
          <div>
            <p className='text-black text-lg mb-3 leading-8 text-justify'>
              I am a web developer with a passion for crafting intuitive and
              engaging websites. With over seven years of experience in the
              industry, I have had the opportunity to work on a variety of
              projects. This diverse experience has allowed me to develop a
              strong skill set in popular tools and technologies such as
              WordPress, React, Python, and PHP.
            </p>
            <p className='text-black text-lg mb-3 leading-8 text-justify'>
              I enjoy being up to date with the latest technologies and trends,
              expanding my knowledge. I&apos;m always eager to take on new
              challenges and am excited to see where my career as a developer
              takes me.
            </p>
            <p className='text-black text-lg mb-3 leading-8 text-justify'>
              Outside of the digital world, I am an avid nature lover and
              traveler. Exploring the beauty of the outdoors and embarking on
              adventures is one of my greatest joys.
            </p>
            <p className='text-black text-lg mb-2 leading-8 text-justify'>
              Beyond my love for nature, I am a coffee enthusiast who savors the
              art of crafting the perfect cup.
            </p>
          </div>
          <div>
            <Skills />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
