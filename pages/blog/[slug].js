import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export async function getStaticPaths() {
    // Get all posts
    const files = fs.readdirSync('posts');
    // Get the slugs
    const paths = files.map((fileName) => ({
        params: {
          slug: fileName.replace('.md', ''),
        }
    }));

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    }
}

export default function postpage({ frontmatter, content }) {
    return (
        <div className=' mx-auto'>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
    )
}