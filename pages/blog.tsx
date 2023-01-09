import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import SidebarArticles from "../components/sidebarArticles";
import { NextPage } from "next";

type Post = {
  slug: string,
  frontmatter: {
    title: string,
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
    <div className="flex justify-center items-center">
      <div className="content">
        <div className="container">
          <div className="grid grid-cols-6 p-8 md:p-5 gap-6">
            <div className="col-span-6">
              <h1 className="text-white text-2xl font-bold mb-4">
                Latest Articles
              </h1>
            </div>
            <div className="col-span-6 md:col-span-4">
              <div
                id="posts-list"
                className="grid grid-cols-1 md:grid-cols-1 gap-4"
              >
                {posts.map(({ slug, frontmatter }) => (
                  <div key={slug} className="post-box">
                    <div className="bg-stone-800 grid grid-cols-1 md:grid-cols-6 rounded-xl shadow-lg overflow-hidden flex flex-col">
                      <div className="col-span-2">
                        <Link href={`/blog/${slug}`}>
                          <a>
                            <Image
                              width={650}
                              height={460}
                              alt={frontmatter.title}
                              src={`/${frontmatter.socialImage}`}
                              layout="responsive"
                              objectFit="cover"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="col-span-4 p-4">
                        <Link href={`/blog/${slug}`}>
                          <a>
                            <h2 className="text-white text-xl font-bold hover:text-emerald-500 transition duration-300 ease-in-out">
                              {frontmatter.title}
                            </h2>
                          </a>
                        </Link>
                        <p className="text-white">{frontmatter.excerpt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-6 md:col-span-2">
              
            </div>
          </div>
        </div>
      </div>
    </div>
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
