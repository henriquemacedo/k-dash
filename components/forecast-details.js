import { useState, useEffect } from "react";
import ForecastDetailsData from "./ui/forecast-details-data";

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
        return item.date === date;
      });

      setData(filteredForecast);
      setLoading(false);
    }
  }, [date, local]);

  return <ForecastDetailsData data={data} loading={loading} />;
}
