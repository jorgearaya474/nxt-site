import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export async function getStaticPaths() {
    // Get all posts
    const files = fs.readdirSync('posts');
    // Get the slugs
    const paths = files.map((fileName) => ({
        params: {
          slug: fileName.replace('.mdx', ''),
        }
    }));

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.mdx`, 'utf-8');
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
        <article className='post prose lg:prose-xl p-4'>
            <div className='content' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </article>
    )
}