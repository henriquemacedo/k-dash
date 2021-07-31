import { useState, useEffect } from "react";
import useFormatSurfaceRunoffData from "hooks/useFormatSurfaceRunoffData";

const mockData = process.env.mockAPI === true;
const moment = require("moment");

export default function useSurfaceRunoffData(props) {
  const { date, local } = props;
  const [loading, setLoading] = useState(false);
  const [surfaceRunoff, setSurfaceRunoff] = useState(null);
  const { lat, long } = local;

  useEffect(() => {
    if (mockData && localStorage.getItem("surface-runoff") === null) {
      setLoading(true);
      const surfaceRunoffData = require("server/mocks/fakeSurfaceRunoff");
      setSurfaceRunoff(useFormatSurfaceRunoffData(date, surfaceRunoffData));
      setLoading(false);
    }

    async function getSurfaceRunoff() {
      setLoading(true);

      try {
        // PROXY URL
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const localData = JSON.parse(localStorage.getItem("surface-runoff"));

        // CHECK LAST UPDATE
        const requestSurfaceRunoffMetadata =
          "https://api.dclimate.net/apiv2/metadata/era5_surface_runoff-hourly?full_metadata=false";

        let fetchSurfaceRunoffMetadata = await fetch(
          proxyUrl + requestSurfaceRunoffMetadata
        );

        fetchSurfaceRunoffMetadata = await fetchSurfaceRunoffMetadata.json();
        const lastUpdate = fetchSurfaceRunoffMetadata["time last generated"];
        // const lastUpdate = "2021-07-30 21:07:53.560286";

        const isOutdated =
          localStorage.getItem("surface-runoff-update") != null
            ? moment(
                localStorage.getItem("surface-runoff-update")
              ).isSameOrBefore(moment(lastUpdate).format("YYYY-MM-DD HH:mm:ss"))
            : true;

        setSurfaceRunoff(
          useFormatSurfaceRunoffData(date, localData[0]["data"])
        );

        if (!mockData && isOutdated) {
          // GET LAST UPDATE DATA
          const requestSurfaceRunoff = `https://api.dclimate.net/apiv2/grid-history/era5_surface_runoff-hourly/${lat}_${long}?also_return_metadata=false&use_imperial_units=false&also_return_snapped_coordinates=false&convert_to_local_time=true`;

          let fetchSurfaceRunoffData = await fetch(
            proxyUrl + requestSurfaceRunoff
          );

          fetchSurfaceRunoffData = await fetchSurfaceRunoffData.json();

          setSurfaceRunoff(
            useFormatSurfaceRunoffData(date, fetchSurfaceRunoffData["data"])
          );

          localStorage.setItem(
            "surface-runoff",
            JSON.stringify(
              useFormatSurfaceRunoffData(date, fetchSurfaceRunoffData["data"])
            )
          );

          localStorage.setItem(
            "surface-runoff-update",
            moment().format("YYYY-MM-DD HH:mm:ss")
          );
        }

        setLoading(false);
      } catch (error) {
        console.error("Error loading volumetric soil water data.");
      }
    }

    if (
      (mockData && localStorage.getItem("surface-runoff") != null) ||
      !mockData
    ) {
      getSurfaceRunoff();
    }
  }, [date, local]);

  return { loading, surfaceRunoff };
}
