import React from 'react';
import Script from 'next/script';
import Head from 'next/head';

const SiteHead: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jorge Araya - Home | jorgearaya.dev</title>
        <meta name='description' content='Are you in need of a skilled and reliable web developer? Jorge Araya is a talented professional with years of experience in building and maintaining websites. From custom designs to complex functionality, Jorge has the expertise to bring your vision to life. Contact him today to discuss your project and see how he can help your business succeed online.' />
        <meta name='keywords' content='developer, web developer, wordpress, wordpress costa rica, web development, react costa rica'></meta>
      </Head>
      <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy='lazyOnload' id='g-analytics'>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

export default SiteHead;