import fs from 'fs';
import md from 'markdown-it';
import matter from 'gray-matter';
import { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';
import MiniHero from '../../components/layout/MiniHero';
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { SinglePost } from '../../interfaces';
import { Calendar } from 'react-feather';
import {
  FadeUpVariantsContainer,
  FadeUpVariantsItem,
} from '../../lib/utils/animations';

const pathName = 'content/posts';

const Postpage: NextPage<SinglePost> = (props) => {
  const { title, excerpt, date, content, image } = props;
  const imageUrl = `/images/posts/${image}`;

  return (
    <div className='content'>
      <Head>
        <title>{title} | jorgearaya.dev</title>
        <meta name='description' content={excerpt} />
        <meta
          name='keywords'
          content='web development, website development, WordPress development, Costa Rica web design, React development, jorge araya, wordpress blog'
        />
      </Head>
      <MiniHero title={title} />
      <div className='single-post flex justify-center items-center py-4'>
        <motion.div
          className='container'
          variants={FadeUpVariantsContainer}
          initial='hidden'
          animate='visible'
        >
          <article className='post prose'>
            <div>
              <Image width={1000} height={600} src={imageUrl} alt={title} />
            </div>
            <div className='meta-data text-slate-400'>
              <span className='mr-3'>
                <Calendar className='inline-flex mb-1 mr-2' size='18' />
                {date}
              </span>
            </div>
            <div
              className='content'
              dangerouslySetInnerHTML={{ __html: md().render(content) }}
            />
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default Postpage;

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const files: string[] = fs.readdirSync(pathName);
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>): Promise<{ props: SinglePost }> {
  const { slug } = params!;
  const filePath = `${process.cwd()}/${pathName}/${slug}.mdx`;
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);
  return {
    props: {
      slug,
      title: frontmatter.title as string,
      image: frontmatter.image as string,
      excerpt: frontmatter.excerpt as string,
      date: frontmatter.date as string,
      isFeatured: frontmatter.isFeatured as boolean,
      content,
    },
  };
}
