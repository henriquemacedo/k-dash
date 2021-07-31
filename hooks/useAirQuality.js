export default function useAirQuality(value) {
  if (value === 0) {
    return;
  }
  if (value === 1) {
    return "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.";
  }
  if (value === 2) {
    return "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.";
  } else {
    return;
  }
}
