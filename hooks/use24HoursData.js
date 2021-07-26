export default function use24HoursData(date, data) {
  let items = [];

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
