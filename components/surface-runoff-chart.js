import { ResponsiveLine } from "@nivo/line";

const moment = require("moment");

export default function SurfaceRunoffChart(props) {
  const { date, data } = props;

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 10, right: 10, bottom: 60, left: 45 }}
      xScale={{
        type: "point",
      }}
      yFormat=" >-.2f"
      enableGridX={false}
      yScale={{
        type: "linear",
        min: "0",
        max: "100",
        reverse: false,
      }}
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickValues: [
          `${moment(date)
            .subtract(1, "days")
            .format("YYYY-MM-DD")} 12:00:00+00:00`,
          `${moment(date).format("YYYY-MM-DD")} 00:00:00+00:00`,
          `${moment(date).format("YYYY-MM-DD")} 12:00:00+00:00`,
        ],
        tickSize: 20,
        legend: "hours",
        legendOffset: 50,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickValues: [0, 25, 50, 75, 100],
        tickSize: 10,
        legend: "cm",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      lineWidth={4}
      colors={["#0336ff"]}
      markers={[
        {
          axis: "y",
          value: 10,
          lineStyle: { stroke: "#F44336", strokeWidth: 3, opacity: 0.5 },
          legend: "flood risk",
          legendPosition: "top-left",
        },
      ]}
      enableCrosshair={true}
      theme={{
        crosshair: {
          line: {
            strokeWidth: 2,
            stroke: "#000000",
            strokeOpacity: 0.15,
          },
        },
      }}
      pointSize={15}
      pointBorderWidth={4}
      pointBorderColor="#0336ff"
      pointColor="#ffffff"
      pointLabelYOffset={-12}
      enableArea={false}
      useMesh={true}
      enableSlices="x"
      sliceTooltip={({ slice }) => {
        return (
          <div
            style={{
              background: "#ffffff",
              padding: "10px",
              border: "2px solid #cccccc",
              borderRadius: "6px",
            }}
          >
            {slice.points.map((point) => (
              <div key={point.id}>
                <div>
                  <strong>{point.data.yFormatted}</strong>
                </div>
                <div style={{ color: "#cccccc" }}>
                  {moment(point.data.xFormatted).format("YYYY-MM-DD")}
                </div>
              </div>
            ))}
          </div>
        );
      }}
    />
  );
}
