import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SelectInteractive from "@ui/select";
import DatePicker from "@ui/date-picker";
import { useSoilWaterData } from "hooks/useSoilWaterData";

const moment = require("moment");

export default function Post() {
  const weatherZones = process.env.weatherZones;
  const router = useRouter();
  const { slug } = router.query;
  const [local, setLocal] = useState({});
  const [date, setDate] = useState("2021-07-02");

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
    date: date,
    local: local,
  });

  return (
    <>
      <DatePicker
        min="2021-07-01"
        max="2021-07-16"
        value={moment(date).format("YYYY-MM-DD")}
        onChange={(e) => setDate(e.detail.value)}
      />
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
