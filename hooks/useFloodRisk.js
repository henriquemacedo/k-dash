export default function useFloodRisk(value) {
  if (value < 5) {
    return;
  }
  if (value >= 5 && value < 10) {
    return "Moderate flood risk during the day. Please be careful.";
  }
  if (value >= 10) {
    return "High flood risk during the day. Please be careful.";
  } else {
    return;
  }
}
