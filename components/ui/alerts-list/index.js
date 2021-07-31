import Icon from "@ui/icon";
import * as Styles from "./styles";

export default function AlertsList(props) {
  const { floodRisk, airQuality } = props;

  return (
    <>
      {floodRisk != undefined || airQuality != undefined ? (
        <Styles.Wrapper>
          <ul>
            {floodRisk && (
              <li>
                <div className="icon">
                  <Icon icon="flood_risk" />
                </div>
                <span>{floodRisk}</span>
              </li>
            )}
            {airQuality && (
              <li>
                <div className="icon">
                  <Icon icon="warning" />
                </div>
                <span>{airQuality}</span>
              </li>
            )}
          </ul>
        </Styles.Wrapper>
      ) : (
        <></>
      )}
    </>
  );
}
