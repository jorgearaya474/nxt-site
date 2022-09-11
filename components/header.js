import Link from "next/link";
import { useRouter } from "next/router";
import { Smile } from "react-feather";

export default function Header() {
  const router = useRouter();
  return (
    <header
      id="site-header"
      className="py-4 sticky top-0 z-50 bg-neutral-900 px-5"
    >
      <div className="container mx-auto flex-1">
        <nav className="flex sm:justify-left space-x-4 px-1">
          <ul className="w-full flex justify-left">
            {[
              ["Home", "/"],
              ["About", "/#section_about"],
              ["Blog", "/blog"],
            ].map(([title, url]) => (
              <Link key={title} href={url}>
                <a
                  className={`rounded-full px-3 py-2 font-bold text-lg text-amber-50 hover:bg-neutral-800 hover:text-emerald-500 ${
                    router.asPath == url ? "text-amber-500" : ""
                  }`}
                >
                  {title}
                </a>
              </Link>
            ))}
            <Link href="mailto:jorgearaya474@gmail.com">
              <a className="mr-0 ml-auto rounded-full px-3 py-2 font-bold text-lg text-emerald-500 border-2 border-emerald-500 hover:border-amber-500 hover:text-amber-500 transition ease-in-out duration-150">
                Say Hello <Smile size={19} className="inline-block hidden md:inline" />
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
