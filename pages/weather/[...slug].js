import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;
  const [fetchData, setFetchData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const url =
      "https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/5.603717_-0.186964?also_return_metadata=false&use_imperial_units=false&also_return_snapped_coordinates=true&convert_to_local_time=true";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setFetchData(data);
      });
  }, []);

  return (
    <>
      <p>Page: {slug}</p>
      {console.log(fetchData)}
      <p>
        Status: {isLoading ? "Loading..." : !fetchData ? "Empty!" : "Done!"}
      </p>
      <Link href="/">
        <a>Back HOME</a>
      </Link>
    </>
  );
}
