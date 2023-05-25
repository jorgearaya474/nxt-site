import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { NextPage } from "next";
import { Calendar, Tag } from "react-feather";
import Head from 'next/head'
import { Post, SinglePost } from "../../interfaces";
import SinglePostView from "../../components/blog/SinglePostView";
import { GetStaticPathsResult, GetStaticPropsContext } from "next";


export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const files: string[] = fs.readdirSync("posts");
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

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>): Promise<{ props: SinglePost }> {
  const { slug } = params!;
  const filePath = `${process.cwd()}/posts/${slug}.mdx`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  return {
    props: {
      slug,
      title: frontmatter.title as string,
      image: frontmatter.image as string,
      excerpt: frontmatter.excerpt as string,
      date: frontmatter.date as string,
      content,
    },
  };
}

const Postpage: NextPage<SinglePost> = (props) => {
  const { slug, title, image, excerpt, date, content } = props;
  return (
    <SinglePostView
      slug={slug}
      title={title}
      image={image}
      excerpt={excerpt}
      date={date}
      content={content}
    />
  );
}

export default Postpage;
