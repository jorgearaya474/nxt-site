import { Facebook, GitHub, Linkedin } from "react-feather";

export default function Footer() {
  return (
    <footer className="py-6 bg-neutral-900">
      <div className="container mx-auto flex justify-center text-white gap-3 mb-2">
        <a href="https://github.com/jorgearaya474" title="Github" className="p-2 bg-neutral-700 rounded-full">
          <GitHub size={20} className="text-neutral-400"/>
        </a>
        <a
          href="https://www.linkedin.com/in/jorge-araya-25088a105/"
          title="LinkedIn" className="p-2 bg-neutral-700 rounded-full"
        >
          <Linkedin size={20} className="text-neutral-400"/>
        </a>
        <a href="https://www.facebook.com/jorgel.araya.50/" title="Facebook" className="p-2 bg-neutral-700 rounded-full">
          <Facebook size={20} className="text-neutral-400"/>
        </a>
      </div>
      <div className="container mx-auto flex justify-center text-white">
        <p className="font-light text-stone-500">
          &copy; {`${new Date().getFullYear()} - made with ☕ by Jorge Araya`}
        </p>
      </div>
    </footer>
  );
}
