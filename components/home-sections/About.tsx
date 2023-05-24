import React from 'react';
import Skills from './Skills';

const About: React.FC = () => {
  return (
    <div id="section_about" className="home-section flex justify-center items-center bg-white py-7">
      <div className="container p-6">
        <div className="mb-5">
          <h2 className="text-black font-bold text-2xl">About me</h2>
        </div>
        <div className="grid gap-2 md:gap-12 grid-cols-1">
          <div>
            <p className="text-black text-xl mb-3 leading-8 text-justify">
              I am a web developer with a passion for creating intuitive and engaging websites. With over 7 years of experience, I have worked on a wide variety of projects, which has helped me develop skills in popular tools and technologies like WordPress, React, Python, and PHP.
            </p>
            <p className="text-black text-xl mb-3 leading-8 text-justify">
              I enjoy being up to date with the latest technologies and trends, expanding my knowledge. I&apos;m always eager to take on new challenges and excited to see where my career as a developer takes me.
            </p>
            <p className="text-black text-xl mb-3 leading-8 text-justify">
              I love nature, and traveling is one of the things I enjoy the most, also here in Costa Rica I really enjoy exploring new places and meeting amazing people.
            </p>
            <p className="text-black text-xl mb-2 leading-8 text-justify">
              I&apos;m also a fan of tech gadgets and a coffee lover!
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
