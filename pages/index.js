import fs from "fs";
import matter from "gray-matter";
import HomePosts from "../components/homePosts";

export default function Home({ posts }) {
  return (
    <div className="home">
      <div className="content">
        <div className="p-4 mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 p-4">
            <div className="py-8 info-txt order-last md:order-first">
              <h1 className="font-bold mb-3 text-white leading-10 md:leading-normal">
                Hi 👋🏻, I&apos;m Jorge Araya!
              </h1>
              <p className="mb-2 text-xl text-justify text-white">
                I&apos;m a full-stack developer living in Costa Rica, with a
                great passion for programming and design. With experience in
                many tools and technologies such as Python, JavsScript, React,
                PHP, WordPress, and more.
              </p>
              <p className="mb-2 text-xl text-justify text-white">
                I&apos;m also a coffee lover, eager to take on new challenges
                and work on amazing projects.
              </p>
            </div>
            <div className="p-2 flex items-center justify-center">
              <div className="pf-picture relative">
                <img
                  src="/images/profile-02.png"
                  className="rounded-full mx-auto md:max-w-xs"
                ></img>

                <div id="circle" className="absolute top-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="100%"
                    height="100%"
                    x="0"
                    y="0"
                    viewBox="0 0 300 300"
                  >
                    <defs>
                      <path
                        id="outer-circle"
                        d="M15 150a135 135 0 01 270 0 135 135 0 01-270 0"
                      >
                        <animateTransform
                          attributeName="transform"
                          begin="0s"
                          dur="350s"
                          type="rotate"
                          from="0 150 150"
                          to="360 150 150"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </path>

                      <path
                        id="inner-circle"
                        d="M40 150a110 110 0 01 220 0 110 110 0 01-220 0"
                      >
                        <animateTransform
                          attributeName="transform"
                          begin="0s"
                          dur="300s"
                          type="rotate"
                          from="360 150 150"
                          to="0 150 150"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </path>
                    </defs>
                    <circle cx="150" cy="150" r="150" fill="none"></circle>
                    <use fill="none" xlinkHref="#outer-circle"></use>
                    <text>
                      <textPath xlinkHref="#outer-circle" fill="#fcd12878">
                        <tspan className="tseparator"> &nbsp;&frasl;&frasl;&nbsp; </tspan>
                        console.log(
                        <tspan className="tstext">&quot;Hello World&quot;</tspan>);
                        <tspan className="tseparator"> &nbsp;&frasl;&frasl;&nbsp; </tspan>
                        echo <tspan className="tstext">&quot;Hello World&quot;</tspan>;
                        <tspan className="tseparator"> &nbsp;&frasl;&frasl;&nbsp; </tspan>
                        print(<tspan className="tstext">&quot;Hello World&quot;</tspan>)
                        <tspan className="tseparator"> &nbsp;&frasl;&frasl;&nbsp; </tspan>
                        System.out.print(
                        <tspan className="tstext">&quot;Hello World&quot;</tspan>);
                      </textPath>
                    </text>
                    <text>
                      <textPath xlinkHref="#inner-circle" fill="#6d6d94">
                        <tspan className="tseparator"> --- </tspan>
                        background-color:{" "}
                        <tspan className="tsval">#ffffff;</tspan>
                        <tspan className="tseparator"> --- </tspan>
                        width: <tspan className="tsval">100%;</tspan>
                        <tspan className="tseparator"> --- </tspan>
                        font-size: <tspan className="tsval">46px;</tspan>
                        <tspan className="tseparator"> --- </tspan>
                        padding: <tspan className="tsval">12px 14px;</tspan>
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="recent-posts" className="p-4 mb-5">
          <div className="grid grid-cols-1 p-4">
            <div>
              <h2 className="font-bold mb-3 text-white">Recent Posts</h2>
            </div>
            <div className="flex items-center justify-center">
              <HomePosts posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
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
      posts,
    },
  };
}
