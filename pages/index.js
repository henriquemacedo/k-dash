import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>K|Dash — Kanda Weather Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <select
          onChange={(e) => {
            router.push(`/weather/${e.target.value}`);
          }}
        >
          <option>Please select city</option>
          <option value="ghana/accra">Accra, Ghana</option>
          <option value="nigeria/uyo">Uyo, Nigeria</option>
        </select>
      </main>
    </div>
  );
}
