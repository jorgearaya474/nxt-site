import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import SidebarArticles from '../../components/sidebarArticles';

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
            posts
        }
    }
}

export default function postpage({ frontmatter, content, posts }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className='col-span-2'>
                <article className='post prose lg:prose-xl p-4'>
                    <div className='content' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
                </article>
            </div>
            <div>
                <SidebarArticles posts={posts}/>
            </div>
        </div>
    )
}