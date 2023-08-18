import React from 'react';
import Link from 'next/link';
import { Linkedin } from 'react-feather';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <section id='section_contact' className='home-section flex justify-center items-center bg-slate-100 py-7 lg:py-24'>
      <div className='container'>
        <div className='mb-5'>
          <h2 className='text-black font-bold text-3xl'>Contact</h2>
        </div>
        <div className='grid md:grid-cols-3 gap-12'>
          <div className='col-span-3 md:col-span-1 flex items-start justify-center'>
            <Image
              src='/images/contact-chat.svg'
              alt='Contact me'
              width={300}
              height={300}
              className='md:w-full'
              loading='lazy'
            />
          </div>
          <div className='col-span-3 md:col-span-2'>
            <p className='ttext-black text-lg mb-3 leading-8 text-justify'>
              If you&apos;re interested in collaborating or have questions about my work, feel free to get in touch using the buttons below. I thrive on embracing fresh opportunities and I&apos;m ready to address any inquiries you might have. <b>Your next project could be our exciting journey together</b>, and I&apos;m eagerly looking forward to your message!
            </p>
            <div className='my-3 flex gap-2'>
              <Link href='mailto:jorgearaya474@gmail.com' className='flex items-center justify-center px-3 py-2 font-bold text-white bg-black hover:bg-orange-500 transition ease-in-out duration-150' title='Contact Jorge'>
                Send me an email
              </Link>
              <Link href='https://www.linkedin.com/in/jorgearayadev' target='_blank' className='flex items-center justify-center px-3 py-2 font-bold text-white bg-black hover:bg-orange-500 transition ease-in-out duration-150' title='Jorge Araya LinkedIn'>
                <Linkedin size={19} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
