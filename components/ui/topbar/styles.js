import styled from "styled-components";
import theme from "styled-theming";
import { rem, darken } from "polished";

const topbar = theme("mode", {
  light: "var(--grey)",
  dark: "#000000",
});

const topbarBorder = theme("mode", {
  light: darken(0.1, "#eeeeee"),
  dark: "#424242",
});

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  border-bottom: 1px solid ${topbarBorder};
  background-color: ${topbar};
  width: 100vw;
  height: ${rem("50px")};
  display: flex;
  justify-content: center;
  z-index: 999;
`;
