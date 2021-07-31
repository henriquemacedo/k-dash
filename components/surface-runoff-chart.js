import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import theme from "styled-theming";
import { rem, darken } from "polished";
import { ResponsiveLine } from "@nivo/line";
import useSurfaceRunoffData from "hooks/useSurfaceRunoffData";
import Spinner from "@ui/spinner";

const cardBorder = theme("mode", {
  light: darken(0.1, "#eeeeee"),
  dark: "#424242",
});

const cardBg = theme("mode", {
  light: "#ffffff",
  dark: "#000000",
});

const Wrapper = styled.main`
  height: ${rem("400px")};
  margin-top: ${rem("30px")};
  background-color: ${cardBg};
  border: 2px solid ${cardBorder};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: ${rem("15px")};
`;

const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const moment = require("moment");

export default function SurfaceRunoffChart(props) {
  const { date, local } = props;
  const themeContext = useContext(ThemeContext);

  const { loading, surfaceRunoff } = useSurfaceRunoffData({
    date: date,
    local: local,
  });

  return (
    <Wrapper>
      {loading || Object.entries(local).length === 0 ? (
        <Loading>
          <Spinner />
        </Loading>
      ) : (
        <ResponsiveLine
          data={surfaceRunoff}
          margin={{ top: 40, right: 10, bottom: 45, left: 35 }}
          xScale={{
            type: "point",
          }}
          yFormat=" >-.4f"
          enableGridX={false}
          yScale={{
            type: "linear",
            min: "0",
            max: "auto",
            reverse: false,
          }}
          curve="linear"
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
            tickSize: 15,
          }}
          axisLeft={{
            tickValues: [0, 25, 50, 75],
            tickSize: 10,
          }}
          lineWidth={3}
          colors={["#0336ff"]}
          // markers={[
          //   {
          //     axis: "y",
          //     value: 10,
          //     lineStyle: {
          //       stroke: "#F44336",
          //       strokeWidth: 3,
          //       opacity: themeContext.mode === "light" ? 0.5 : 1,
          //     },
          //     legend: "flood risk (cm)",
          //     legendPosition: "top-left",
          //     textStyle: {
          //       fill: "#F44336",
          //       opacity: themeContext.mode === "light" ? 0.5 : 1,
          //     },
          //   },
          // ]}
          enableCrosshair={true}
          theme={{
            axis: {
              ticks: {
                line: {
                  stroke: "#cccccc",
                },
                text: {
                  fill:
                    themeContext.mode === "light"
                      ? "#cccccc"
                      : darken(0.5, "#eeeeee"),
                },
              },
            },
            grid: {
              line: {
                stroke: "#cccccc",
              },
            },
            crosshair: {
              line: {
                strokeWidth: 1,
                stroke: themeContext.mode === "light" ? "#000000" : "#ffffff",
                strokeOpacity: themeContext.mode === "light" ? 0.15 : 0.3,
              },
            },
          }}
          pointSize={8}
          // pointBorderWidth={2}
          // pointBorderColor="#0336ff"
          pointColor="#0336ff"
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
                    <div
                      style={{
                        color: "#212121",
                      }}
                    >
                      <strong>{point.data.yFormatted}</strong>
                    </div>
                    <div
                      style={{
                        color: "#cccccc",
                      }}
                    >
                      {moment(point.data.xFormatted).format("YYYY-MM-DD")}
                    </div>
                  </div>
                ))}
              </div>
            );
          }}
        />
      )}
    </Wrapper>
  );
}
