import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSoilWaterData } from "hooks/useSoilWaterData";
import SelectInteractive from "@ui/select";

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
      <SelectInteractive />
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
