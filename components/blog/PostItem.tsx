import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeUpVariantsItem } from '../../lib/utils/animations';
import { Post } from '../../types';
import trimWords from '../../lib/utils/TrimWords';

const PostItem: React.FC<Post> = ({ slug, title, image, excerpt }) => {
  const imageUrl = `/images/posts/${image}`;
  const postUrl = `/blog/${slug}`;

  return (
    <motion.div
      key={slug}
      className='bg-white grid grid-cols-1 content-start shadow-lg'
      variants={FadeUpVariantsItem}
    >
      <Link href={postUrl} className='relative overflow-hidden'>
        <Image
          width={500}
          height={300}
          alt={title}
          src={imageUrl}
          className='object-cover w-full h-64'
        />
      </Link>
      <div className='p-6'>
        <Link href={postUrl}>
          <h2
            className='text-black text-xl font-bold mb-2 hover:text-orange-500 transition duration-300 ease-in-out'
            title={title}
          >
            {title}
          </h2>
        </Link>
        <p className='text-sm'>{trimWords(excerpt, 30)}...</p>
        <Link
          href={postUrl}
          className='block items-center justify-center w-fit px-3 py-2 my-5 font-bold text-white bg-black hover:bg-orange-500 transition ease-in-out duration-150'
          title={title}
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default PostItem;
