import Icon from "../icon";
import * as Styles from "./styles";

export default function Toggle(props) {
  const { onClick, onChange, checked = false } = props;

  return (
    <Styles.Wrapper className="toggle-theme">
      <Icon className="light" icon="light" />
      <Styles.Input
        type="checkbox"
        id="switch"
        onClick={onClick}
        onChange={onChange}
        checked={checked}
      />
      <Styles.Label htmlFor="switch">Toggle Theme</Styles.Label>
      <Icon className="dark" icon="dark" />
    </Styles.Wrapper>
  );
}
