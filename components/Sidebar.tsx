import React, { FC } from "react";
import Link from "next/link";
import { Send } from "react-feather";
import { Post } from "../pages/blog";

interface SidebarProps {
  posts: Array<Post>;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { posts } = props;
  return (
    <div id="sidebar">
      <div className="bg-white rounded-xl p-6 shadow-lg overflow-hidden flex flex-col mb-8 divide-y-2 divide-gray-200">
        <h2 className="text-black text-xl md:text-2xl font-bold mb-3">
            Latest Articles
        </h2>
        {
          posts.slice(1, -1).map(({ slug, frontmatter }) => (
            <div key={slug} className="post-box py-2">
                <Link href={`/blog/${slug}`}>
                <a>
                    <h3 className="text-black text-xl mb-2 hover:text-emerald-500 transition duration-300 ease-in-out">
                    {frontmatter.title}
                    </h3>
                </a>
                </Link>
            </div>
          ))
        }
      </div>
      <div className="bg-white rounded-xl p-6 shadow-lg overflow-hidden flex flex-col">
        <h2 className="text-black text-xl md:text-2xl font-bold mb-3">
            Got a question? Don&apos;t hesitate, reach out to me and I&apos;ll be happy to help.
        </h2>
        <Link href="mailto:jorgearaya474@gmail.com">
            <a className="text-xl px-3 py-2 font-bold text-black text-center rounded-full bg-emerald-300 hover:bg-emerald-400 transition ease-in-out duration-150">
            Contact me <Send size={19} className="inline-block" />
            </a>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
