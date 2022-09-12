import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Smile } from "react-feather";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // setup mobile menu handler
  const menuBtnHandler = () => {
    setMenuOpen(!menuOpen);
  };

  // close the mobile menu after route change
  useEffect(() => {
    setMenuOpen(false);
  }, [router]);

  return (
    <header
      id="site-header"
      className="py-4 sticky top-0 z-50 bg-neutral-900 px-5"
    >
      <div className="container mx-auto flex-1">
        <nav className="flex items-center justify-between flex-wrap">
          <div
            id="header_title"
            className="flex items-center flex-shrink-0 text-white mr-6"
          >
            <span className="font-black text-xl text-emerald-500 tracking-tight">
              jorge@site:
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={menuBtnHandler}
              className="flex items-center px-3 py-2 border rounded text-emerald-500 border-emerald-500 hover:text-amber-500 hover:border-amber-500"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            id="menuContainer"
            className={`w-full ${
              menuOpen ? "" : "hidden"
            } lg:block flex-grow lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0 bg-neutral-800 lg:bg-transparent rounded-md py-5 px-3 lg:p-0`}
          >
            <ul className="text-sm lg:flex-grow">
              {[
                ["/home", "/"],
                ["/about", "/#section_about"],
                ["/blog", "/blog"],
              ].map(([title, url]) => (
                <Link key={title} href={url}>
                  <a
                    className={`block 
                      md:inline-block 
                      rounded-full 
                      px-2 
                      md:px-3 
                      py-2 
                      mb-3
                      lg:mb-0
                      font-bold 
                      text-lg 
                      text-amber-50 
                      hover:bg-neutral-800 
                      hover:text-emerald-500 
                      ${router.asPath == url ? "text-amber-500" : ""}`}
                  >
                    {title}
                  </a>
                </Link>
              ))}
            </ul>
            <div>
              <Link href="mailto:jorgearaya474@gmail.com">
                <a className="mr-0 ml-auto rounded-full px-3 py-2 font-bold text-lg text-emerald-500 border-2 border-emerald-500 hover:border-amber-500 hover:text-amber-500 transition ease-in-out duration-150">
                  Say Hello <Smile size={19} className="inline-block inline" />
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
