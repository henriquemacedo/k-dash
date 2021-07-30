import styled from "styled-components";
// import theme from "styled-theming";
import { rem, darken } from "polished";

// const icons = theme("mode", {
//   light: darken(0.2, "#eeeeee"),
//   dark: "#424242",
// });

export const Wrapper = styled.div`
  margin-top: ${rem("45px")};

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      list-style: none;
      margin: 0 ${rem("15px")};
      display: flex;
      align-items: center;

      svg {
        margin-right: ${rem("5px")};
        width: auto;
        height: ${rem("30px")};
        fill: ${darken(0.2, "#eeeeee")};
      }
    }
  }
`;
