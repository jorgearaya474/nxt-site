import fs from "fs";
import matter from "gray-matter";
import HomePosts from "../components/homePosts";

export default function Home({ posts }) {
  return (
    <div className="content">
      <div class="p-4 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          <div className="py-8 info-txt order-last md:order-first">
            <h1 className="font-bold mb-3">
              Hi 👋🏻, I'm Jorge Araya!
            </h1>
            <p className="mb-2 text-xl text-justify">
              I'm a full-stack developer living in Costa Rica, with a great passion for programming and design. 
              With experience in many tools and technologies such as Python, JavsScript, React, PHP, 
              WordPress, and many more.
            </p>
            <p className="mb-2 text-xl text-justify">
              I'm also a coffee lover, eager to take on new challenges and work on amazing projects.
            </p>
          </div>
          <div className="p-2 flex items-center justify-center">
            <figure className="pf-picture">
              <img
                src="/images/jorge-armoji.png"
                className="rounded-full mx-auto md:max-w-xs"
              ></img>
            </figure>
          </div>
        </div>
      </div>
      {/*<div id="recent-posts" className="p-4 mb-5">
        <div className="grid grid-cols-1 p-4">
          <div>
            <h2 className="font-bold mb-3">Recent Posts</h2>
          </div>
          <div className="flex items-center justify-center">
            <HomePosts posts={posts} />
          </div>
        </div>
      </div>*/}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
