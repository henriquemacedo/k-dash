import Head from "next/head";
import SelectInteractive from "@ui/select";

export default function Home() {
  return (
    <>
      <Head>
        <title>K|Dash — Kanda Weather Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SelectInteractive />
      </main>
    </>
  );
}
