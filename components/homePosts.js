import Image from "next/image";
import Link from "next/link";

export default function HomePosts(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {props.posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="pr-2"
        >
            <div className="border border-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col">
            <Link href={`/blog/${slug}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />

              <h1 className="p-4">{frontmatter.title}</h1>
            </a>
          </Link>
            </div>
        </div>
      ))}
    </div>
  );
}
