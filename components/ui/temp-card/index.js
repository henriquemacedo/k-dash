import Icon from "@ui/icon";
import useWeatherCondition from "hooks/useWeatherCondition";
import * as Styles from "./styles";

const moment = require("moment");

export default function TempCard(props) {
  const { date = "2021-06-09", forecast, loading = true } = props;

  const createWeek = () => {
    let days = [];

    for (let i = -3; i < 4; i++) {
      days.push(moment(date).add(i, "days").format("YYYY-MM-DD"));
    }

    return days;
  };

  return (
    <Styles.Wrapper>
      {createWeek().map((day, index) => {
        const checkIndex = forecast.map((e) => e.date).indexOf(day);
        const filteredDay =
          checkIndex > -1
            ? forecast.filter((event) => {
                return event.date === day;
              })
            : [];

        return (
          <Styles.Day key={index} className={index === 3 ? "today" : ""}>
            <div>{moment(day).format("MMM DD")}</div>
            <div className="temp">
              <span>
                {filteredDay.length > 0 && filteredDay[0].temperature != ""
                  ? `${filteredDay[0].temperature}º`
                  : "n/a"}
              </span>
            </div>
            <div>
              <span>
                {filteredDay.length > 0 && filteredDay[0].condition != "" ? (
                  <Icon icon={useWeatherCondition(filteredDay[0].condition)} />
                ) : (
                  "n/a"
                )}
              </span>
            </div>
          </Styles.Day>
        );
      })}
    </Styles.Wrapper>
  );
}
