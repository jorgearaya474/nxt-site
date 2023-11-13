import React from 'react';
import { motion } from 'framer-motion';
import { FadeUpVariantsContainer } from '../../lib/utils/animations';
import PostItem from './PostItem';
import { BlogPosts } from '../../types';

const PostsList: React.FC<BlogPosts> = ({ posts }) => {
  return (
    <div data-testid='posts-list' className='col-span-6 md:col-span-4'>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-8'
        variants={FadeUpVariantsContainer}
        initial='hidden'
        animate='visible'
      >
        {posts.map((post) => (
          <PostItem
            key={post.slug}
            slug={post.slug}
            title={post.title}
            image={post.image}
            excerpt={post.excerpt}
            date={post.date}
            isFeatured={post.isFeatured}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PostsList;
