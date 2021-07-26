const moment = require("moment");

export default function useHoursData(date, data) {
  let items = [];
  const dayBefore = moment(date).subtract(1, "days").format("YYYY-MM-DD");

  for (let i = 0; i < 24; i++) {
    const number = i.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    items.push({
      day: dayBefore,
      time: `${dayBefore} ${number}:00:00+00:00`,
      value: data[`${dayBefore} ${number}:00:00+00:00`],
    });
  }

  for (let i = 0; i < 24; i++) {
    const number = i.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    items.push({
      day: date,
      time: `${date} ${number}:00:00+00:00`,
      value: data[`${date} ${number}:00:00+00:00`],
    });
  }

  return items;
}
