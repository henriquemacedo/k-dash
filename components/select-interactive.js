import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Select from "react-select";

export default function SelectInteractive() {
  const [defaultValue, setDefaultValue] = useState(null);
  const weatherZones = process.env.weatherZones;
  const router = useRouter();
  const currentRoute = router.asPath.replace("/weather/", "");

  const selectOptions = weatherZones.map((local) => ({
    value: (local.country + "/" + local.city).toLowerCase(),
    label: `${local.city}, ${local.country}`,
  }));

  const handleChange = (selectedOption) => {
    router.push(`/weather/${selectedOption.value}`);
  };

  useEffect(() => {
    const defaultIndex = () => {
      return selectOptions
        .map(function (e) {
          return e.value;
        })
        .indexOf(currentRoute);
    };

    setDefaultValue(defaultIndex);
  }, [currentRoute]);

  return (
    <Select
      instanceId="dasd"
      placeholder="Please select a city"
      options={selectOptions}
      value={selectOptions[defaultValue]}
      onChange={handleChange}
    />
  );
}
