export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-8 py-6">
      
      <div className="container mx-auto flex justify-center text-white">
          <a href="https://github.com/jorgearaya474" title="Github">
            <img className="w-6 m-3 opacity-60 hover:opacity-100" src="/images/github-icon.svg" />
          </a>
          <a href="https://www.linkedin.com/in/jorge-araya-25088a105/" title="LinkedIn">
            <img className="w-6 m-3 opacity-60 hover:opacity-100" src="/images/linkedin-icon.svg" />
          </a>
          <a href="https://www.facebook.com/jorgel.araya.50/" title="Facebook">
            <img className="w-6 m-3 opacity-60 hover:opacity-100" src="/images/facebook-icon.svg" />
          </a>
        </div>
        <div className="container mx-auto flex justify-center text-white">
          <p className="font-light text-slate-500">&copy; {`${new Date().getFullYear()} - made with ☕ by Jorge Araya`}</p>
        </div>
    </footer>
  );
}
