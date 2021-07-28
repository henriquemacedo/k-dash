import { useState, useEffect } from "react";
import useFormatData from "hooks/useFormatData";

const mockData = process.env.mockAPI === true;

export const useSurfaceRunoffData = (props) => {
  const { date, local } = props;
  const [surfaceRunoff, setSurfaceRunoff] = useState(null);
  const [loading, setLoading] = useState(false);
  const { lat, long } = local;

  useEffect(() => {
    if (mockData) {
      const surfaceRunoffData = require("server/mocks/fakeSurfaceRunoff");
      setSurfaceRunoff(useFormatData(date, surfaceRunoffData));
      setLoading(false);
    }

    async function getSurfaceRunoff() {
      setLoading(true);
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const requestUrl = `https://api.dclimate.net/apiv2/grid-history/era5_surface_runoff-hourly/${lat}_${long}?also_return_metadata=false&use_imperial_units=false&also_return_snapped_coordinates=false&convert_to_local_time=true`;
        let fetchData = await fetch(proxyUrl + requestUrl);
        fetchData = await fetchData.json();
        setSurfaceRunoff(useFormatData(date, fetchData["data"]));
        setLoading(false);
      } catch (error) {
        console.error("Error loading volumetric soil water data.");
      }
    }

    !mockData && getSurfaceRunoff();
  }, [date, local]);

  return { loading, surfaceRunoff };
};
