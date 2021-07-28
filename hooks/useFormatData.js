const moment = require("moment");

export default function useFormatData(date, data) {
  let items = [
    {
      id: "surface-runoff",
      data: [],
    },
  ];

  const dayBefore = moment(date).subtract(1, "days").format("YYYY-MM-DD");

  const getBase = (string) => {
    return parseFloat(string.replace(" m", "").split("e")[0]);
  };

  const getExponent = (string) => {
    return parseFloat(string.split("e").pop().replace(" m", ""));
  };

  for (let i = 0; i < 24; i++) {
    const number = i.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    items[0].data.push({
      x: `${dayBefore} ${number}:00:00+00:00`,
      y:
        getBase(data[`${dayBefore} ${number}:00:00+00:00`]) > 0
          ? getBase(data[`${dayBefore} ${number}:00:00+00:00`]) **
              getExponent(data[`${dayBefore} ${number}:00:00+00:00`]) /
            0.01
          : 0,
    });
  }

  for (let i = 0; i < 24; i++) {
    const number = i.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    items[0].data.push({
      x: `${date} ${number}:00:00+00:00`,
      y:
        getBase(data[`${date} ${number}:00:00+00:00`]) > 0
          ? getBase(data[`${date} ${number}:00:00+00:00`]) **
              getExponent(data[`${date} ${number}:00:00+00:00`]) /
            0.01
          : 0,
    });
  }

  return items;
}
