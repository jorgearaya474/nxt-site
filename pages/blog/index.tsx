import { NextPage } from 'next';
import Head from 'next/head'
import fs from 'fs';
import matter from 'gray-matter';
import PostsList from '../../components/blog/PostsList';
import { Post, BlogPosts } from '../../interfaces';

const Blog: NextPage<BlogPosts> = (props) => {
  return (
    <div className='content flex justify-center items-center pt-20 lg:pt-28'>
      <Head>
        <title>Blog | jorgearaya.dev</title>
      </Head>
      <div className='container'>
        <h1 className='text-black font-bold text-2xl mb-6'>Latest Articles</h1>
        <PostsList posts={props.posts} />
      </div>
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
