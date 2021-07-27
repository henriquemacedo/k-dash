import { useState, useEffect } from "react";
import useHoursData from "hooks/useHoursData";

const mockData = process.env.mockAPI === true;

export const useSoilWaterData = (props) => {
  const { date, local } = props;
  const [volSoilWater, setVolSoilWater] = useState(null);
  const [loading, setLoading] = useState(false);
  const { lat, long } = local;

  useEffect(() => {
    if (mockData) {
      const volSoilwaterData = require("server/mocks/fakeVolSoilWater");
      setVolSoilWater(useHoursData(date, volSoilwaterData));
      setLoading(false);
    }

    async function getVolSoilWater() {
      setLoading(true);
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const requestUrl = `https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/${lat}_${long}?also_return_metadata=false&use_imperial_units=false&also_return_snapped_coordinates=false&convert_to_local_time=true`;
        let fetchData = await fetch(proxyUrl + requestUrl);
        fetchData = await fetchData.json();
        setVolSoilWater(useHoursData(date, fetchData["data"]));
        setLoading(false);
      } catch (error) {
        console.error("Error loading volumetric soil water data.");
      }
    }

    !mockData && getVolSoilWater();
  }, [date, local]);

  return { loading, volSoilWater };
};
