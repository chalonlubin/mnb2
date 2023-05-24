import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>MNB</title>
        <meta name="description" content="Book sharing based on proximity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <div>

            <h1>Welcome to My Neighbor's Bookshelf </h1>
          </div>
        </main>
      </Layout>
    </>
  );
}
