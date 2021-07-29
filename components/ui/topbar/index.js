import Toggle from "@ui/toggle";
import * as Styles from "./styles";

export default function Topbar(props) {
  const { toggleTheme, isDarkTheme = false, children } = props;

  return (
    <Styles.Wrapper>
      <div className="logo">
        <img src="/k-dash-logo.svg" alt="K|Dash — Kanda Weather Group" />
      </div>
      {children}
      <Toggle onClick={toggleTheme} onChange={() => {}} checked={isDarkTheme} />
    </Styles.Wrapper>
  );
}
