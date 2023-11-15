import React, { useRef } from 'react';
import Link from 'next/link';
import { Linkedin } from 'react-feather';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  FadeUpVariantsContainer,
  FadeUpVariantsItem,
} from '../../lib/utils/animations';

const Contact: React.FC = () => {
  const contactSection = useRef(null);
  const isVisible = useInView(contactSection, { once: true });

  return (
    <section
      id='section_contact'
      className='home-section flex justify-center items-center bg-slate-100 py-7 lg:py-24'
      ref={contactSection}
    >
      <div className='container'>
        <div className='mb-5'>
          <h2 className='text-black font-bold text-3xl'>Contact</h2>
        </div>
        <motion.div
          className='grid md:grid-cols-3 gap-12'
          variants={FadeUpVariantsContainer}
          initial='hidden'
          animate={isVisible ? 'visible' : ''}
        >
          <motion.div
            className='col-span-3 md:col-span-1 flex items-start justify-center'
            variants={FadeUpVariantsItem}
          >
            <Image
              src='/images/contact-chat.svg'
              alt='Contact me'
              width={300}
              height={300}
              className='md:w-full'
              loading='lazy'
            />
          </motion.div>
          <motion.div
            className='col-span-3 md:col-span-2'
            variants={FadeUpVariantsItem}
          >
            <p className='ttext-black text-lg mb-3 leading-8 text-justify'>
              Interested in collaboration or have questions about my work?
              Don&apos;t hesitate to reach out using the buttons below. I thrive
              on fresh opportunities and am ready to address any inquiries you
              might have.
              <b>Your next project could be our exciting journey together</b>,
              and I&apos;m eagerly looking forward to your message!
            </p>
            <div className='my-3 flex gap-2'>
              <Link
                href='mailto:jorgearaya474@gmail.com'
                className='flex items-center justify-center px-3 py-2 font-bold text-white bg-black hover:bg-orange-500 transition ease-in-out duration-150'
                title='Contact Jorge'
              >
                Send me an email
              </Link>
              <Link
                href='https://www.linkedin.com/in/jorgearayadev'
                target='_blank'
                className='flex items-center justify-center px-3 py-2 font-bold text-white bg-black hover:bg-orange-500 transition ease-in-out duration-150'
                title='Jorge Araya LinkedIn'
              >
                <Linkedin size={19} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
