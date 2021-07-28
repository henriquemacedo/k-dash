import * as Styles from "./styles";

export default function Topbar(props) {
  const { children } = props;

  return <Styles.Wrapper>{children}</Styles.Wrapper>;
}
