const withPWA = require("next-pwa");

module.exports = withPWA({
  env: {
    mockAPI: true,
    weatherZones: [
      {
        country: "Ghana",
        countryCode: "GH",
        city: "Accra",
        lat: "5.603717",
        long: "-0.186964",
      },
      {
        country: "Nigeria",
        countryCode: "NG",
        city: "Uyo",
        lat: "5.0405866",
        long: "7.9194225",
      },
    ],
  },
  pwa: {
    dest: "public",
  },
});
