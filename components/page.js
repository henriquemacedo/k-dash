import Head from "next/head";

export default function Page(props) {
  const { children } = props;

  return (
    <>
      <Head>
        <title>K|Dash — Kanda Weather Group</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>{children}</main>
    </>
  );
}
