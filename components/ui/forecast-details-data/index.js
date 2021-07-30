import Icon from "@ui/icon";
import * as Styles from "./styles";

export default function ForecastDetailsData(props) {
  const { data, loading = true } = props;

  return (
    <Styles.Wrapper>
      <ul>
        <li>
          <Icon icon="precipitation" />
          {!loading && data.length > 0 && data[0].rain ? (
            <span>{`${data[0].rain}%`}</span>
          ) : (
            <span className="empty">N/A</span>
          )}
        </li>
        <li>
          <Icon icon="humidity" />
          {!loading && data.length > 0 && data[0].humidity ? (
            <span>{`${data[0].humidity}%`}</span>
          ) : (
            <span className="empty">N/A</span>
          )}
        </li>
        <li
          className={
            !loading && data.length > 0 && data[0].windDirection != null
              ? data[0].windDirection
              : "wind-direction"
          }
        >
          <Icon icon="direction" />
          {!loading && data.length > 0 && data[0].wind ? (
            <span>{`${data[0].windDirection} ${data[0].wind} m/s`}</span>
          ) : (
            <span className="empty">N/A</span>
          )}
        </li>
        <li>
          <Icon icon="pressure" />
          {!loading && data.length > 0 && data[0].pressure ? (
            <span>{`${data[0].pressure} mb`}</span>
          ) : (
            <span className="empty">N/A</span>
          )}
        </li>
      </ul>
    </Styles.Wrapper>
  );
}
