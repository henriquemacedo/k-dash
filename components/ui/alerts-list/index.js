import Icon from "@ui/icon";
import * as Styles from "./styles";

export default function AlertsList(props) {
  const { cenas } = props;

  return (
    <Styles.Wrapper>
      <ul>
        <li className="moderate">
          <div className="icon">
            <Icon icon="warning" />
          </div>
          <span>
            Some members of the general public may experience health effects;
            members of sensitive groups may experience more serious health
            effects.
          </span>
        </li>
        <li className="high">
          <div className="icon">
            <Icon icon="flood_risk" />
          </div>
          <span>High flood risk during the day. Please be careful.</span>
        </li>
      </ul>
    </Styles.Wrapper>
  );
}
