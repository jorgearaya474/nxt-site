
import matter from "gray-matter";
import Link from "next/link";

export default function SidebarArticles(props) {
    return(
        <div id="sidebar-articles-widget">
            <ul className="text-slate-700 text-lg leading-6">            
            {props.posts.map(({ slug, frontmatter }) => (
                <li key={slug} className="post-box">
                    <Link href={`/blog/${slug}`}>
                        <a className="block py-2 font-medium hover:text-slate-900 dark:text-stone-300 dark:hover:text-emerald-300">
                            <h3>&#8250; {frontmatter.title}</h3>
                        </a>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );
}