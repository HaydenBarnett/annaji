import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content="https://annaphase.com/preview.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
