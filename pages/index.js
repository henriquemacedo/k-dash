import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const weatherZones = process.env.weatherZones;

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
          {weatherZones.map((local, index) => (
            <option
              key={index}
              value={(local.country + "/" + local.city).toLowerCase()}
            >{`${local.city}, ${local.country}`}</option>
          ))}
        </select>
      </main>
    </div>
  );
}
