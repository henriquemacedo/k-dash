import Icon from "@ui/icon";
import * as Styles from "./styles";

export default function ForecastDetailsData(props) {
  const { data, loading = true } = props;

  return (
    <Styles.Wrapper>
      <ul>
        <li>
          <Icon icon="precipitation" />
          {!loading && data[0].rain ? `${data[0].rain}%` : "n/a"}
        </li>
        <li>
          <Icon icon="humidity" />
          {!loading && data[0].humidity ? `${data[0].humidity}%` : "n/a"}
        </li>
        <li>
          <Icon icon="wind" />
          {!loading && data[0].wind ? `${data[0].wind} m/s` : "n/a"}
        </li>
        <li>
          <Icon icon="pressure" />
          {!loading && data[0].pressure ? `${data[0].pressure} mb` : "n/a"}
        </li>
      </ul>
    </Styles.Wrapper>
  );
}
