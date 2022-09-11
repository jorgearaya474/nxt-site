import Link from "next/link";
import { Linkedin, GitHub, Send } from "react-feather";
import Image from "next/image";
import SVGComponent from "../components/animation";

export default function Home() {
  return (
    <div className="content">
      <div id="section_intro" className="flex justify-center items-center">
        <div className="container">
          <div className="grid grid-cols-3 p-5">
            <div className="col-span-3 md:col-span-2 order-2">
              <span className="text-3xl mb-3 text-amber-50 leading-10 md:leading-normal">
                Hi 👋🏻, I&apos;m
              </span>
                <h1 className="text-emerald-500 text-6xl md:text-8xl block mt-1 font-black uppercase tracking-tighter text-left">
                  Jorge Araya
                </h1>
              <p className="mb-2 text-2xl text-amber-50 text-left">
                I&apos;m a full-stack web developer from 🇨🇷
              </p>
              <div className="my-3 flex gap-2">
                <Link href="mailto:jorgearaya474@gmail.com">
                  <a className="px-3 py-2 font-bold text-black rounded-full bg-emerald-500 hover:bg-amber-500 transition ease-in-out duration-150">
                    Contact me <Send size={19} className="inline-block" />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/jorge-araya-25088a105">
                  <a className="flex items-center justify-center px-3 py-2 font-bold text-black rounded-full bg-emerald-500 hover:bg-amber-500 transition ease-in-out duration-150">
                    <Linkedin size={19} />
                  </a>
                </Link>
                <Link href="https://github.com/jorgearaya474">
                  <a className="flex items-center justify-center px-3 py-2 font-bold text-black rounded-full bg-emerald-500 hover:bg-amber-500 transition ease-in-out duration-150">
                    <GitHub size={19} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 order-1 md:order-2 mb-7">
            <SVGComponent id="code_animation" className="relative mx-auto"/>
          </div>
          </div>
          
        </div>
      </div>
      <div
        id="section_about"
        className="flex justify-center items-center h-full md:h-screen py-14 bg-neutral-800"
      >
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
          <div className="col-span-2">
            <h2 className="text-amber-50 font-bold text-3xl mb-3">About me</h2>
            <p className="text-amber-50 text-xl mb-2 leading-6">
              I&apos;m a full-stack developer from Costa Rica, with a great
              passion for programming and design, eager to take on new
              challenges and work on amazing projects.
            </p>
            <p className="text-amber-50 text-xl mb-2 leading-6">
              With 7 years of experience in web development, I have worked with
              many tools and technologies such as Python, JavaScript, React,
              PHP, WordPress and more.
            </p>
            <p className="text-amber-50 text-xl mb-2 leading-6">
              I am a coffee lover who enjoys nature and loves to travel, I also
              like playing video games!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/profile-02.png"
              alt="Picture of the author"
              width={300}
              height={300}
              className="p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
