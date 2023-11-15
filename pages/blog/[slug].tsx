import { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';
import MiniHero from '../../components/layout/MiniHero';
import { Post } from '../../interfaces';
import { Calendar } from 'react-feather';
import { FadeUpVariantsContainer } from '../../lib/utils/animations';
import { getPostData, getPostsFiles } from '../../lib/posts-util';
import ReactMarkdown from 'react-markdown';

const Postpage: NextPage<Post> = (props) => {
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

            <ReactMarkdown className='content'>{content}</ReactMarkdown>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default Postpage;

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;

  return {
    props: getPostData(slug),
  };
}
