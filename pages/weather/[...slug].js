import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSoilWaterData } from "hooks/useSoilWaterData";

export default function Post() {
  const weatherZones = process.env.weatherZones;
  const router = useRouter();
  const { slug } = router.query;
  const [local, setLocal] = useState({});

  useEffect(() => {
    if (!router.isReady) return;

    const getPageInfo = weatherZones.filter((local) => {
      return (
        local.country.toLowerCase() === "ghana" &&
        local.city.toLowerCase() === "accra"
      );
    });

    setLocal(getPageInfo[0]);
  }, [router.isReady]);

  const { loading, volSoilWater } = useSoilWaterData({
    date: "2021-07-02",
    local: local,
  });

  return (
    <>
      <p>Page: {slug}</p>
      <p>
        Status: {loading ? "Loading..." : !volSoilWater ? "Empty!" : "Done!"}
      </p>
      <Link href="/">
        <a>Back HOME</a>
      </Link>
    </>
  );
}
