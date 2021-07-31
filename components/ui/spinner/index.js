import * as Styles from "./styles";

export default function Spinner(props) {
  const {
    fill = "#7a7a7a",
    size = "20px",
    className = "spinner",
    style,
  } = props;

  return (
    <Styles.Loading
      className={className}
      fill={fill}
      size={size}
      style={style}
    />
  );
}
