import Header from "./header";
import Footer from "./footer";
import { useEffect } from "react";
import { headerStickyAnimate, loadTitleMask  } from "./utils/utils";

export default function Layout({ children }) {
  useEffect(() => {
    headerStickyAnimate();
    loadTitleMask();
  })
  return (
    <div id="nxt_site" className="flex flex-col min-h-screen">
        <Header/>
        <main className="">{children}</main>
        <Footer/>
    </div>
  );
}
