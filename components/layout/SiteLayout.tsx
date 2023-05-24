import React from 'react';
import type { ReactNode } from 'react';
import SiteHead from './SiteHead';
import MainHeader from './MainHeader';
import Footer from './Footer';

interface Props {
    children: ReactNode
}

const SiteLayout: React.FC<Props> = (props) => {
    return (
        <>
            <SiteHead />
            <MainHeader />
            <main className="">{props.children}</main>
            <Footer />
        </>
    );
}

export default SiteLayout;