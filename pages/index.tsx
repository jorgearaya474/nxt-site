import Link from "next/link";
import { Linkedin, GitHub, Send, Facebook } from "react-feather";
import Image from "next/image";
import { NextPage } from "next";
import DevIcon from "devicon-react-svg";

const devIconStyle = {
  fill: "#333",
  width: "40px",
  marginRight: "5px"
};

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
                    Get in touch <Send size={19} className="inline-block" />
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
                width={400}
                height={400}
                className="rounded-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="section_about" className="flex justify-center items-center bg-gray-100 py-14">
        <div className="container grid grid-cols-1 p-8 md:p-0">
          <div className="mb-5">
            <h2 className="text-black font-bold text-2xl">About</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-black text-lg mb-2 leading-6 text-justify">
                I am a web developer with a passion for creating intuitive and engaging websites. I hail from the beautiful country of Costa Rica, where I have honed my skills in popular tools and technologies such as WordPress, React, Python, and PHP.
              </p>
              <p className="text-black text-lg mb-2 leading-6 text-justify">
                I enjoy staying up to date with the latest web development trends and expanding my knowledge of programming languages. I am a hard-working and dedicated individual who is always eager to take on new challenges, and I am excited to see where my career as a developer takes me next.
              </p>
              <p className="text-black text-lg mb-2 leading-6 text-justify">
                I like to spend my free time cooking, traveling and exploring new places here in Costa Rica. I also love playing video games!
              </p>
            </div>
            <div>
              <div className="bg-gray-200 p-5 rounded-md">
                <h3 className="text-gray-500 text-xl font-bold">My Skills</h3>
                <ul role="list" className="md:columns-3 space-y-3 text-slate-400 mt-4">
                  {[
                    ["React", "react"],
                    ["PHP", "php"],
                    ["WordPress", "wordpress"],
                    ["Python", "python"],
                    ["Sass", "sass"],
                    ["JavaScript", "javascript"],
                    ["Webpack", "webpack"],
                    ["Bootstrap", "bootstrap"],
                    ["Docker", "docker"],
                    ["Mysql", "mysql"],
                    ["Git", "git"]
                  ].map(([title, icon]) => (
                    <li key={icon} className="flex text-gray-500 items-center font-bold"><DevIcon icon={icon} style={devIconStyle} /> {title}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div id="section_contact" className="flex justify-center items-center py-14">
        <div className="container grid grid-cols-1 p-8 md:p-0">
          <div className="mb-5">
            <h2 className="text-black font-bold text-2xl">Contact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-black text-lg mb-2 leading-6 text-justify">
                If you have any questions or comments about my work, please don&apos;t hesitate to reach out to me using the buttons below
              </p>
              <p className="text-black text-lg mb-2 leading-6 text-justify">
                I am always open to new challenges and am happy to answer any questions you may have. I look forward to hearing from you!
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
                <Link href="https://www.facebook.com/jorgel.araya.50/">
                  <a className="flex items-center justify-center px-3 py-2 font-bold text-black rounded-full bg-emerald-300 hover:bg-emerald-400 transition ease-in-out duration-150">
                    <Facebook size={19} />
                  </a>
                </Link>
              </div>
            </div>
            <div>

              <Image
                src="/images/paper-plane.png"
                alt="Contact me"
                width={300}
                height={200}
                className="rounded-md w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
