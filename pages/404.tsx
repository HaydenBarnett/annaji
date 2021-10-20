import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Avatar = () => {
  return (
    <div className="avatar">
      <Image src="/avatar.jpg" width="110" height="110" alt="" />
    </div>
  );
};

const Error404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <main className="page-404">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <h1>
          <Link href="/" passHref>
            <a className="link">404</a>
          </Link>
        </h1>
      </main>
    </>
  );
};

export default Error404;
