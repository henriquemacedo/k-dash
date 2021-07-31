export default function useFloodRisk(value) {
  const percentage = (value / 48) * 100;

  if (percentage < 35) {
    return;
  }
  if (percentage >= 35 && percentage < 75) {
    return "Moderate flood risk during the day. Please be careful.";
  }
  if (percentage >= 80) {
    return "High flood risk during the day. Please be careful.";
  } else {
    return;
  }
}
