import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { Post } from '../interfaces';

const postsDirectory = path.join(process.cwd(), 'content/posts');

// Get single post data
export function getPostData(fileName: string): Post {
  const postSlug = fileName.replace(/\.mdx$/, ''); // remove the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    title: data.title,
    image: data.image,
    excerpt: data.excerpt,
    date: data.date,
    isFeatured: data.isFeatured,
    content,
  }
}

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

// Get all posts
export function getAllPosts() {
  const files = getPostsFiles();


  const allPosts: Post[] = files.map((fileName) => {
    return getPostData(fileName);
  });

  allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return allPosts;
}