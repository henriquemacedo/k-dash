import { useState, useEffect } from "react";
import AlertsList from "@ui/alerts-list";
import useSurfaceRunoffData from "hooks/useSurfaceRunoffData";
import useFloodRisk from "hooks/useFloodRisk";
import useAirQuality from "hooks/useAirQuality";

const moment = require("moment");

export default function Alerts(props) {
  const { date, local } = props;
  const [highestValue, setHighestValue] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  const { surfaceRunoff } = useSurfaceRunoffData({
    date: date,
    local: local,
  });

  useEffect(() => {
    if (surfaceRunoff === null || Object.entries(local).length === 0) {
      return;
    } else {
      const filteredForecast = surfaceRunoff[0].data.filter((item) => {
        return item.x.includes(date);
      });

      setHighestValue(
        filteredForecast.reduce((a, b) => (a = a > b.y ? a : b.y), 0)
      );

      const data = require(`server/mocks/${local?.countryCode.toLowerCase()}-${local?.city.toLowerCase()}`);
      const forecast = data.forecast;

      const lastWindValues = forecast.filter((item) => {
        return (
          item.date === moment(date).subtract(2, "days").format("YYYY-MM-DD") ||
          item.date === moment(date).subtract(1, "days").format("YYYY-MM-DD")
        );
      });

      const getAirQuality = () => {
        if (
          lastWindValues.length === 2 &&
          lastWindValues.reduce((total, next) => total + next.wind, 0) / 2 < 5
        ) {
          setAirQuality(2);
        }
        if (lastWindValues.length === 1 && lastWindValues[0].wind < 5) {
          setAirQuality(1);
        }
        if (
          lastWindValues.length >= 1 &&
          lastWindValues.reduce((total, next) => total + next.wind, 0) /
            lastWindValues.length >=
            5
        ) {
          setAirQuality(0);
        }
      };

      getAirQuality();
    }
  }, [surfaceRunoff, date, local]);

  return (
    <AlertsList
      airQuality={useAirQuality(airQuality)}
      floodRisk={useFloodRisk(highestValue)}
    />
  );
}
