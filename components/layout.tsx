import Header from "./header";
import Footer from "./footer";
import { FC } from "react";
import type { ReactNode } from 'react';

type LayoutProps = { children?: ReactNode }

const Layout: FC<LayoutProps> = (props) => {
  return (
    <div id="nxt_site" className="flex flex-col min-h-screen">
      <Header />
      <main className="">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
