import React, { Fragment } from 'react';
import Script from 'next/script';
import Head from 'next/head';

const SiteHead: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Jorge Araya - Home | jorgearaya.dev</title>
        <meta
          name='description'
          content="Discover the talent and expertise of Jorge Araya, a skilled web developer dedicated to crafting and maintaining impactful websites. From bespoke designs to intricate functionalities, Jorge seamlessly blends years of experience with a user-centric approach to breathe life into your digital vision. Reach out today to discuss your project and unlock how he can elevate your business's online success."
        />
        <meta
          name='keywords'
          content='web developer, website development, WordPress development, Costa Rica web design, React development, Jorge Araya portfolio, responsive design, user experience, front-end development, back-end development, SEO optimization, jorge araya'
        />
        <meta name='language' content='en' />
      </Head>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy='lazyOnload' id='g-analytics'>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
    </Fragment>
  );
};

export default SiteHead;
