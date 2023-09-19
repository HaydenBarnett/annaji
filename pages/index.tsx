import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <>
      <Head>
        <title>Anna Ji - Head of Product</title>
        <meta
          name="description"
          content="Anna Ji is the Head of Product of Clipchamp at Microsoft, working to bring video editing online and accessible to everyone."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="wrapper">
        <div className="container" style={{ opacity: imageIsLoaded ? 1 : 0 }}>
          <div className="avatar">
            <Image
              src="/avatar.jpg"
              width="110"
              height="110"
              alt="Anna Ji"
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.indexOf("data:image/gif;base64") < 0) {
                  setImageIsLoaded(true);
                }
              }}
            />
          </div>
          <h1>Anna Ji</h1>
          <p>
            Head of Product of{" "}
            <Link
              href="https://clipchamp.com"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Clipchamp
            </Link>{" "}
            at Microsoft, working to bring video editing online and accessible
            to everyone.
          </p>
          <p>
            You can connect with me on{" "}
            <Link
              href="https://www.linkedin.com/in/annahji"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
