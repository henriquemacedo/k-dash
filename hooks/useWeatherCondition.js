export default function useWeatherCondition(condition) {
  let icon;

  switch (condition) {
    case "Sunny":
      icon = "sun";
      break;
    case "Partly Cloudy":
      icon = "sun_cloud";
      break;
    case "Mostly Cloudy":
      icon = "clouds_sun";
      break;
    case "Cloudy":
      icon = "clouds";
      break;
    case "Rain":
      icon = "rain";
      break;
    case "Light Rain":
      icon = "light_rain";
      break;
    case "Heavy Rain":
      icon = "heavy_rain";
      break;
    case "Thunderstorm":
      icon = "thuderstorm";
      break;
    case "Snow":
      icon = "snow";
      break;
    case "Fog":
      icon = "fog";
      break;
    default:
      icon = "sun";
  }

  return icon;
}
