import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { Project } from '../interfaces';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

// Get single project data
export function getProjectData(fileName: string): Project {
  const projectSlug = fileName.replace(/\.mdx$/, ''); // remove the file extension
  const filePath = path.join(projectsDirectory, `${projectSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return {
    slug: projectSlug,
    title: data.title,
    image: data.image,
    link: data.link,
    technologies: data.technologies,
  }
}

// Get all projects
export function getAllProjects() {
  const files = fs.readdirSync(projectsDirectory);

  const allProjects: Project[] = files.map((fileName) => {
    return getProjectData(fileName);
  });

  return allProjects;
}