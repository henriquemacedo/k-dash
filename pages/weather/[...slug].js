import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SelectInteractive from "@ui/select";
import DatePicker from "@ui/date-picker";
import SurfaceRunoffChart from "@components/surface-runoff-chart";
import { useSurfaceRunoffData } from "hooks/useSurfaceRunoffData";

const mockData = process.env.mockAPI === true;
const moment = require("moment");

export default function Post() {
  const weatherZones = process.env.weatherZones;
  const router = useRouter();
  const { slug } = router.query;
  const [local, setLocal] = useState({});
  const [date, setDate] = useState(mockData ? "2021-06-09" : moment());

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

  const { loading, surfaceRunoff } = useSurfaceRunoffData({
    date: date,
    local: local,
  });

  return (
    <>
      <DatePicker
        min={mockData ? "2021-06-02" : ""}
        max={mockData ? "2021-06-14" : ""}
        value={moment(date).format("YYYY-MM-DD")}
        onChange={(e) => setDate(e.detail.value)}
      />
      <SelectInteractive />
      <p>Page: {slug}</p>
      <p>
        Status: {loading ? "Loading..." : !surfaceRunoff ? "Empty!" : "Done!"}
      </p>

      <div style={{ height: "400px" }}>
        {!loading && <SurfaceRunoffChart date={date} data={surfaceRunoff} />}
      </div>

      <Link href="/">
        <a>Back HOME</a>
      </Link>
    </>
  );
}
