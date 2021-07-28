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

    const dayValue = data[`${dayBefore} ${number}:00:00+00:00`] ?? 0;

    items[0].data.push({
      x: `${dayBefore} ${number}:00:00+00:00`,
      y: dayValue
        ? getBase(dayValue) > 0
          ? getBase(dayValue) ** getExponent(dayValue) / 0.01
          : 0
        : null,
    });
  }

  for (let i = 0; i < 24; i++) {
    const number = i.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    const dayValue = data[`${date} ${number}:00:00+00:00`] ?? 0;

    items[0].data.push({
      x: `${date} ${number}:00:00+00:00`,
      y: dayValue
        ? getBase(dayValue) > 0
          ? getBase(dayValue) ** getExponent(dayValue) / 0.01
          : 0
        : null,
    });
  }

  return items;
}
