import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MainHeader: React.FC = () => {
  const router = useRouter();

  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="site-header" className={`sticky top-0 z-50 bg-white transition-all duration-300 ${hasScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto flex-1">
        <nav className="flex items-center justify-between flex-wrap">
          <ul className="w-full flex justify-between">
            {[
              ["Home", "/"],
              ["About", "/#section_about"],
              ["Contact", "/#section_contact"],
              ["Blog", "/blog"]
            ].map(([title, url]) => (
              <Link key={title} href={url} className='md:inline-block py-2 mb-3 lg:mb-0 font-bold text-lg text-black'>
                {title}
              </Link>
            ))}
          </ul>
        </nav>
      </div >
    </header >
  );
}

export default MainHeader;
