import { AppProps } from "next/app";
import "../styles/globals.scss";
import SiteLayout from "../components/layout/SiteLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
}

export default MyApp;
