import { NextPage } from 'next';
import Head from 'next/head'
import fs from 'fs';
import matter from 'gray-matter';
import { Project, Projects } from '../../interfaces';
import MiniHero from '../../components/layout/MiniHero';
import WorksList from '../../components/works/WorksList';
import Contact from '../../components/home-sections/Contact';

const Works: NextPage<Projects> = (props) => {
  return (
    <div className='content'>
      <Head>
        <title>Projects | jorgearaya.dev</title>
        <meta name='description' content="Explore my portfolio as a skilled web developer. Dive into a collection of meticulously crafted projects that showcase creativity, functionality, and innovation. Witness the power of code turned into captivating digital experiences." />
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
}

export default Works;

export async function getStaticProps() {
  const files = fs.readdirSync('projects');

  const projects: Project[] = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      title: frontmatter.title as string,
      image: frontmatter.image as string,
      link: frontmatter.link as string,
      technologies: frontmatter.technologies as string,
      description: frontmatter.description as string,
    };
  });

  return {
    props: {
      projects,
    },
  };
}
