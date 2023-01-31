import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { NextPage } from "next";
import { Calendar, Tag } from "react-feather";
import Sidebar from "../../components/Sidebar";
import Head from 'next/head'
import { Post } from "../blog";

interface Article extends Post {
  content: any,
  posts: Array<Post>
}

export async function getStaticPaths() {
  // Get all posts
  const files = fs.readdirSync("posts");
  // Get the slugs
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: { params: any, slug: string }) {
  const fileName = fs.readFileSync(`posts/${slug}.mdx`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  // get post list
  const postsFiles = fs.readdirSync("posts");
  const posts = postsFiles.map((fileName) => {
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
      frontmatter,
      content,
      posts,
    },
  };
}
const Postpage: NextPage<Article> = (props) => {
  const { frontmatter, content, posts } = props;
  return (
    <>
      <Head>
        <title>{frontmatter.title} | jorgearaya.dev</title>
        <meta name="description" content={frontmatter.excerpt}/>
      </Head>
      <div className="content py-8">
        <div id="blog_template" className="flex justify-center items-start">
          <div className="container">
            <div className="grid grid-cols-6 p-4 md:p-0 gap-6">
              <div className="col-span-6 md:col-span-4">
                <article className="post prose lg:prose-xl">
                  <div className="meta-data text-slate-400">
                    <span className="mr-3">
                      <Calendar className="inline-flex mb-1" size="18" />{" "}
                      {frontmatter.date}
                    </span>
                  </div>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: md().render(content) }}
                  />
                </article>
              </div>
              <div className="col-span-6 md:col-span-2 mt-10">
                <Sidebar posts={posts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Postpage;
