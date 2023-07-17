import Head from "next/head";
import { api } from "~/utils/api";
import { type NextPage } from "next";

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">
            <div>Profile View</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SinglePostPage;
