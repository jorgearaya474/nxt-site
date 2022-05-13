export default function Header() {
    return (
        <header className="mb-8 py-4 bg-blue-500"> 
            <div className="container mx-auto flex-1">
                <nav className="flex sm:justify-left space-x-4 px-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <a href="/" className="font-bold">Jorge Araya</a>
                    </div>
                    {/*[
                        ['Blog', '/blog'],
                        ['Contact', '/contact'],
                        ['Projects', '/projects'],
                    ].map(([title, url]) => (
                        <a key={title} href={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                    ))*/}
                </nav>
            </div>
      </header>
    );
}

