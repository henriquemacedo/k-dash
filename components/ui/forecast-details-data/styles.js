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

      &.wind-direction svg {
        transform: rotate(22.5deg);
      }

      &.N svg {
        transform: rotate(0deg);
      }

      &.NNE svg {
        transform: rotate(22.5deg);
      }

      &.NE svg {
        transform: rotate(45deg);
      }

      &.ENE svg {
        transform: rotate(67.5deg);
      }

      &.E svg {
        transform: rotate(90deg);
      }

      &.ESE svg {
        transform: rotate(112.5deg);
      }

      &.SE svg {
        transform: rotate(135deg);
      }

      &.SSE svg {
        transform: rotate(157.5deg);
      }

      &.S svg {
        transform: rotate(180deg);
      }

      &.SSW svg {
        transform: rotate(202.5deg);
      }

      &.SW svg {
        transform: rotate(225deg);
      }

      &.WSW svg {
        transform: rotate(247.5deg);
      }

      &.W svg {
        transform: rotate(270deg);
      }

      &.WNW svg {
        transform: rotate(292.5deg);
      }

      &.NW svg {
        transform: rotate(315deg);
      }

      &.NNW svg {
        transform: rotate(337.5deg);
      }

      svg {
        margin-right: ${rem("5px")};
        width: auto;
        height: ${rem("30px")};
        fill: ${darken(0.2, "#eeeeee")};
      }
    }
  }
`;
