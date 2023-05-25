import React from 'react';
import PostListItem from './PostListItem';
import { BlogPosts } from '../../interfaces';

const PostsList: React.FC<BlogPosts> = ({ posts }) => {
  return (
    <div className='col-span-6 md:col-span-4'>
      <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
        {posts.map((post) => (
          <PostListItem
            key={post.slug}
            slug={post.slug}
            title={post.title}
            image={post.image}
            excerpt={post.excerpt}
            date={post.date} />
        ))}
      </div>
    </div>
  );
}

export default PostsList;
