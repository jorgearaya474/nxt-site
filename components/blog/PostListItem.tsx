import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import trimWords from '../../lib/utils/TrimWords';
import { Post } from '../../interfaces';

const PostListItem: React.FC<Post> = ({ slug, title, image, excerpt }) => {
  return (
    <div key={slug} className='post-box mb-8 fadeInUp-animation'>
      <div className='bg-white grid grid-cols-1 md:grid-cols-2 shadow-lg hover:shadow-xl transition-all duration-300'>
        <div>
          <Link href={`/blog/${slug}`}>
            <Image
              width={650}
              height={520}
              alt={title}
              src={`/${image}`}
            />
          </Link>
        </div>
        <div className='p-6'>
          <Link href={`/blog/${slug}`}>
            <h2 className='text-black text-xl md:text-2xl font-bold mb-2 hover:text-amber-500 transition duration-300 ease-in-out' title={title}>
              {title}
            </h2>
          </Link>
          <p className='text-black'>{`${trimWords(excerpt, 22)}...`}</p>
          <Link href={`/blog/${slug}`} className='block w-fit mt-4 px-3 py-2 font-bold text-white bg-black hover:bg-orange-500 transition ease-in-out duration-150' title={title}>Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default PostListItem;