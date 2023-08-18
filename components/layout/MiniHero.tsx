import React from 'react';

interface MiniHeroProps {
  title: string
}

const MiniHero: React.FC<MiniHeroProps> = ({ title }) => {
  return <section className='grid-background flex justify-center items-center bg-gradient-to-r from-blue-950 to-sky-900 overflow-hidden lg:h-full relative'>
    <div className='container'>
      <div className="grid py-10 mx-auto lg:py-24">
        <div className='fadeInUp-animation'>
          <h1 className='text-bold text-3xl lg:text-5xl block mt-1 mb-1 font-bold text-white text-left'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  </section>
}

export default MiniHero;
