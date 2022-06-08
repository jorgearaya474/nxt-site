import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="mb-8 py-4">
      <div className="container mx-auto flex-1">
        <nav className="flex sm:justify-left space-x-4 px-4">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            {[
              ["Home", "/"],
              ["Blog", "/blog"],
              ["Projects", "/projects"],
            ].map(([title, url]) => (
              <Link key={title} href={url}>
                <a
                  className={`rounded-lg px-3 py-2 font-bold text-lg text-white hover:bg-slate-100 hover:text-slate-900 ${
                    router.pathname == url ? "text-emerald-500" : ""
                  }`}
                >
                  {title}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
