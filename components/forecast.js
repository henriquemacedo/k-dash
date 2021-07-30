import { useState, useEffect } from "react";
import TempCard from "./ui/temp-card";

const moment = require("moment");

export default function Forecast(props) {
  const { date, local } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.entries(local).length === 0) {
      setLoading(true);
    } else {
      const data = require(`server/mocks/${local?.countryCode.toLowerCase()}-${local?.city.toLowerCase()}`);
      const forecast = data.forecast;
      const filteredForecast = forecast.filter((item) => {
        return (
          item.date === moment(date).subtract(3, "days").format("YYYY-MM-DD") ||
          item.date === moment(date).subtract(2, "days").format("YYYY-MM-DD") ||
          item.date === moment(date).subtract(1, "days").format("YYYY-MM-DD") ||
          item.date === date ||
          item.date === moment(date).add(1, "days").format("YYYY-MM-DD") ||
          item.date === moment(date).add(2, "days").format("YYYY-MM-DD") ||
          item.date === moment(date).add(3, "days").format("YYYY-MM-DD")
        );
      });

      setData(filteredForecast);
      setLoading(false);
    }
  }, [date, local]);

  return <TempCard date={date} forecast={data} loading={loading} />;
}
