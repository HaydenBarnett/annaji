import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Error404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <main className="page-404">
        <h1>
          <Link href="/" className="link">
            4<span className="letter">0</span>4
          </Link>
        </h1>
        <div className="avatar">
          <Image src="/avatar.jpg" width="110" height="110" alt="" />
        </div>
      </main>
    </>
  );
};

export default Error404;
