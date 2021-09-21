import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Anna Ji - Head of Product</title>
        <meta
          name="description"
          content="Anna Ji is the Head of Product at Clipchamp, working to bring video editing online and accessible to everyone."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="wrapper">
        <div className="container">
          <div className="avatar">
            <Image src="/avatar.jpg" width="110" height="110" alt="Anna Ji" />
          </div>
          <h1>Anna Ji</h1>
          <p>
            Head of Product at{" "}
            <Link href="https://clipchamp.com" passHref>
              <a target="_blank">Clipchamp</a>
            </Link>
            , working to bring video editing online and accessible to everyone.
          </p>
          <p>
            You can connect with me on{" "}
            <Link href="https://www.linkedin.com/in/annahji" passHref>
              <a target="_blank">LinkedIn</a>
            </Link>
            , or reach me by email -{" "}
            <a href="mailto:anna@clipchamp.com">anna@clipchamp.com</a>
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
