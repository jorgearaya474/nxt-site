import { NextPage } from 'next';
import Head from 'next/head'
import fs from 'fs';
import matter from 'gray-matter';
import PostsList from '../../components/blog/PostsList';
import { Post, BlogPosts } from '../../interfaces';
import MiniHero from '../../components/layout/MiniHero';
import Contact from '../../components/home-sections/Contact';

const Blog: NextPage<BlogPosts> = (props) => {
  return (
    <div className='content'>
      <Head>
        <title>Blog | jorgearaya.dev</title>
        <meta name='description' content="Discover insights and expertise in web development on my blog. Join me in exploring the dynamic world of coding, design, and innovation. Elevate your web development journey with valuable tips and perspectives from an experienced web developer" />
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
}

export default Blog;

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts: Post[] = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      title: frontmatter.title as string,
      image: frontmatter.image as string,
      excerpt: frontmatter.excerpt as string,
      date: frontmatter.date as string,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
