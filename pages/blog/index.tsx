import { NextPage } from 'next';
import Head from 'next/head';
import fs from 'fs';
import matter from 'gray-matter';
import PostsList from '../../components/blog/PostsList';
import { Post, BlogPosts } from '../../interfaces';
import MiniHero from '../../components/layout/MiniHero';
import Contact from '../../components/home-sections/Contact';
import { getAllPosts } from '../../lib/posts-util';

const pathName = 'content/posts';

const Blog: NextPage<BlogPosts> = (props) => {
  return (
    <div className='content'>
      <Head>
        <title>Blog | jorgearaya.dev</title>
        <meta
          name='description'
          content='Discover insights and expertise in web development on my blog. Join me in exploring the dynamic world of coding, design, and innovation. Elevate your web development journey with valuable tips and perspectives from an experienced web developer'
        />
        <meta
          name='keywords'
          content='web developer, website development, WordPress development, Costa Rica web design, React development, Jorge Araya blog, responsive design, user experience, front-end development, back-end development, SEO optimization, jorge araya, wordpress blog'
        />
      </Head>
      <MiniHero title='Latest Articles' />
      <div className='flex justify-center items-center py-10'>
        <div className='container'>
          <PostsList posts={props.posts} />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Blog;

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
