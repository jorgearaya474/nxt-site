import React, { Fragment } from 'react';
import type { ReactNode } from 'react';
import SiteHead from './SiteHead';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}

const SiteLayout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <SiteHead />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default SiteLayout;
