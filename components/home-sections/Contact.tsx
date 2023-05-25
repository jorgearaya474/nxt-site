import React from 'react';
import Link from 'next/link';
import { Linkedin } from 'react-feather';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <div id='section_contact' className='home-section flex justify-center items-center bg-white py-7'>
      <div className='container'>
        <div className='mb-5'>
          <h2 className='text-black font-bold text-2xl'>Contact</h2>
        </div>
        <div className='grid md:grid-cols-3 gap-12'>
          <div className='col-span-3 md:col-span-1 flex justify-center'>
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
            <p className='ttext-black text-xl mb-3 leading-8 text-justify'>
              If you have any inquiries or feedback regarding my work, feel free to contact me using the buttons below.
              I am enthusiastic about taking on new challenges and I will gladly address any questions you may have. I am excitedly awaiting your message!
            </p>
            <div className='my-3 flex gap-2'>
              <Link href='mailto:jorgearaya474@gmail.com' className='flex items-center justify-center px-3 py-2 font-bold text-white bg-black hover:bg-orange-500 transition ease-in-out duration-150'>
                Send me an email 📧
              </Link>
              <Link href='https://www.linkedin.com/in/jorgearayadev' className='flex items-center justify-center px-3 py-2 font-bold text-white bg-black hover:bg-orange-500 transition ease-in-out duration-150'>
                <Linkedin size={19} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
