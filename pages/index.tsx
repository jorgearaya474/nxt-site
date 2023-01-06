import Link from "next/link";
import { Linkedin, GitHub, Send } from "react-feather";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="content">
      
      <div id="section_intro" className="flex justify-center items-center">
        <div className="container">
          <div className="grid grid-cols-3 p-4 md:p-0">
            <div className="col-span-3 md:col-span-2 order-2">
              <span className="text-lg md:text-2xl mb-3 text-black leading-10 md:leading-normal">
                Hi 👋🏻, I&apos;m
              </span>
              <h1 className="text-black text-4xl md:text-6xl block mt-1 font-black uppercase tracking-tighter text-left">
                Jorge Araya
              </h1>
              <p className="mb-2 text-lg md:text-2xl text-black text-left">
                I&apos;m a full-stack developer from Costa Rica 🇨🇷 with 7 years experience, passionate about tech and design.
              </p>
              <div className="my-3 flex gap-2">
                <Link href="mailto:jorgearaya474@gmail.com">
                  <a className="px-3 py-2 font-bold text-black rounded-full bg-emerald-300 hover:bg-emerald-400 transition ease-in-out duration-150">
                    Contact me <Send size={19} className="inline-block" />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/jorge-araya-25088a105">
                  <a className="flex items-center justify-center px-3 py-2 font-bold text-black rounded-full bg-emerald-300 hover:bg-emerald-400 transition ease-in-out duration-150">
                    <Linkedin size={19} />
                  </a>
                </Link>
                <Link href="https://github.com/jorgearaya474">
                  <a className="flex items-center justify-center px-3 py-2 font-bold text-black rounded-full bg-emerald-300 hover:bg-emerald-400 transition ease-in-out duration-150">
                    <GitHub size={19} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 order-1 md:order-2">
              <Image
                src="/images/jorge-araya-profile-pic.png"
                alt="Picture of the author"
                width={300}
                height={300}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="section_about" className="flex justify-center items-center py-14">
        <div className="container grid grid-cols-1 gap-4 p-8 md:p-5">
          <div className="border-b-2 border-gray-200 pl-2 mb-4">
            <h2 className="text-black font-bold text-2xl">About</h2>
          </div>
          <div className="col-span-2">
            
            <p className="text-black text-lg mb-2 leading-6 text-justify">
              I&apos;m a full-stack developer from Costa Rica with a great
              passion for programming and design, eager to take on new
              challenges and work on cool projects.
            </p>
            <p className="text-black text-lg mb-2 leading-6 text-justify">
              With more than six years of experience in web development, I have
              worked with many tools and technologies such as Python,
              JavaScript, React, PHP, WordPress, and more.
            </p>
            <p className="text-black text-lg mb-2 leading-6 text-justify">
              I spend my free time cooking, traveling, and hiking to discover
              new places here in Costa Rica. I also love to play video games!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
