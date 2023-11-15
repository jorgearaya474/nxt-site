import { NextPage } from 'next';
import Head from 'next/head';
import { Projects } from '../../interfaces';
import { getAllProjects } from '../../lib/projects-util';
import MiniHero from '../../components/layout/MiniHero';
import WorksList from '../../components/work/WorksList';
import Contact from '../../components/home-sections/Contact';

const Works: NextPage<Projects> = (props) => {
  return (
    <div className='content'>
      <Head>
        <title>Works | jorgearaya.dev</title>
        <meta
          name='description'
          content='Explore my portfolio as a skilled web developer. Dive into a collection of meticulously crafted projects that showcase creativity, functionality, and innovation. Witness the power of code turned into captivating digital experiences.'
        />
        <meta
          name='keywords'
          content='web developer, website development, WordPress development, Costa Rica web design, React development, Jorge Araya blog, responsive design, user experience, front-end development, back-end development, SEO optimization, jorge araya, wordpress blog, jorge araya portfolio'
        />
      </Head>
      <MiniHero title='Latest Projects' />
      <div className='flex justify-center items-center py-10'>
        <div className='container'>
          <WorksList projects={props.projects} />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Works;

export async function getStaticProps() {
  return {
    props: {
      projects: getAllProjects(),
    },
  };
}
