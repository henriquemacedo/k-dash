import { useState, useEffect } from "react";
import useHoursData from "hooks/useHoursData";

const mockData = process.env.mockAPI === true;

export const useSoilWaterData = (props) => {
  const { date, lat, long } = props;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getVolSoilWater() {
      setLoading(true);

      if (mockData) {
        const volSoilwaterData = require("server/mocks/fakeVolSoilWater");
        setData(useHoursData(date, volSoilwaterData));
        setLoading(false);
      }

      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const requestUrl = `https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/${lat}_${long}?also_return_metadata=false&use_imperial_units=false&also_return_snapped_coordinates=false&convert_to_local_time=true`;
        let fetchData = await fetch(proxyUrl + requestUrl);
        fetchData = await fetchData.json();
        setData(useHoursData(date, fetchData["data"]));
        setLoading(false);
      } catch (error) {
        console.error("Error loading volumetric soil water data.");
      }
    }

    getVolSoilWater();
  }, []);

  return { loading, data };
};
