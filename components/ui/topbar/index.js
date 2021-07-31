import Link from "next/link";
import Toggle from "@ui/toggle";
import * as Styles from "./styles";

export default function Topbar(props) {
  const { toggleTheme, isDarkTheme = false, children } = props;

  return (
    <Styles.Wrapper>
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/k-dash-logo.svg" alt="K|Dash — Kanda Weather Group" />
          </a>
        </Link>
      </div>
      {children}
      <Toggle onClick={toggleTheme} onChange={() => {}} checked={isDarkTheme} />
    </Styles.Wrapper>
  );
}
