import Image from "next/image";
import Link from "next/link";

export default function HomePosts(props) {
  return (
    <div id="posts-list" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {props.posts.map(({ slug, frontmatter }) => (
        <div key={slug} className="post-box">
            <div className="bg-stone-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:bg-emerald-700 transition duration-300 ease-in-out">
            <Link href={`/blog/${slug}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className="p-4 text-white">{frontmatter.title}</h1>
            </a>
          </Link>
            </div>
        </div>
      ))}
    </div>
  );
}
