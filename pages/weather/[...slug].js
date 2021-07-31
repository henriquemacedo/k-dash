import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import DatePicker from "@ui/date-picker";
import Footer from "@ui/footer";
import Page from "@components/page";
import Alerts from "@components/alerts";
import Forecast from "@components/forecast";
import ForecastDetails from "@components/forecast-details";
import SurfaceRunoffChart from "@components/surface-runoff-chart";

const mockData = process.env.mockAPI === true;
const moment = require("moment");

export default function Post() {
  const weatherZones = process.env.weatherZones;
  const router = useRouter();
  const { slug } = router.query;
  const [local, setLocal] = useState({});
  const [date, setDate] = useState(
    mockData && local.city === "Accra" ? "2021-06-09" : "2021-03-09"
  );

  useEffect(() => {
    if (!router.isReady) return;

    const getPageInfo = weatherZones.filter((local) => {
      return (
        local.country.toLowerCase() === slug[0] &&
        local.city.toLowerCase() === slug[1]
      );
    });

    setLocal(getPageInfo[0]);
  }, [slug, router.isReady]);

  return (
    <Page>
      <DatePicker
        min={mockData && local.city === "Accra" ? "2021-06-01" : "2021-01-01"}
        max={mockData && local.city === "Accra" ? "2021-06-15" : "2021-03-31"}
        value={moment(date).format("YYYY-MM-DD")}
        onChange={(e) => setDate(e.detail.value)}
      />

      <Alerts date={date} local={local} />
      <Forecast date={date} local={local} />
      <ForecastDetails date={date} local={local} />
      <SurfaceRunoffChart date={date} local={local} />
      <Footer>
        Back to{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </Footer>
    </Page>
  );
}
