import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import { NextPage } from "next";
import trimWords from "../../lib/utils/TrimWords";
import Head from 'next/head'

export interface Post {
  slug: string,
  frontmatter: {
    title: string,
    date: string,
    socialImage: string,
    excerpt: string,
  }
}

interface BProps {
  posts: Array<Post>
}

const Blog: NextPage<BProps> = (props) => {
  const {posts} = props
  return (
    <>
    <Head>
      <title>Blog | jorgearaya.dev</title>
    </Head>
    <div className="content py-6">
      <div id="blog_template" className="flex justify-center items-start mt-4">
        <div className="container">
          <div className="grid grid-cols-6 p-4 md:p-0 gap-6">
            <div className="col-span-6 md:col-span-4">
              <div
                id="posts-list"
                className="grid grid-cols-1 md:grid-cols-1 gap-4"
              >
                {posts.map(({ slug, frontmatter }) => (
                  <div key={slug} className="post-box mb-8">
                    <div className="bg-white grid grid-cols-1 md:grid-cols-2 rounded-xl shadow-lg overflow-hidden flex flex-col">
                      <div>
                        <Link href={`/blog/${slug}`}>
                          <a>
                            <Image
                              width={650}
                              height={520}
                              alt={frontmatter.title}
                              src={`/${frontmatter.socialImage}`}
                              layout="responsive"
                              objectFit="cover"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="p-6">
                        <Link href={`/blog/${slug}`}>
                          <a>
                            <h2 className="text-black text-2xl md:text-3xl font-bold mb-2 hover:text-emerald-500 transition duration-300 ease-in-out">
                              {frontmatter.title}
                            </h2>
                          </a>
                        </Link>
                        <p className="text-black">{`${trimWords(frontmatter.excerpt, 24)}...`}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-6 md:col-span-2">
              <Sidebar posts={posts}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
