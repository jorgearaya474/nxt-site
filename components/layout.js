import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div id="nxt_site" className="flex flex-col min-h-screen">
      <Header/>
      <main className="container mx-auto flex-1">{children}</main>
      <Footer/>
    </div>
  );
}
