import styled from "styled-components";
import theme from "styled-theming";
import { rem, darken } from "polished";
import { device } from "@utils/breakpoints";

const cardBorder = theme("mode", {
  light: darken(0.1, "#eeeeee"),
  dark: "#424242",
});

const cardBg = theme("mode", {
  light: "#ffffff",
  dark: "#000000",
});

const icons = theme("mode", {
  light: "var(--dark)",
  dark: "#ffffff",
});

export const Wrapper = styled.div`
  margin-top: ${rem("50px")};
  background-color: ${cardBg};
  border: 2px solid ${cardBorder};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: ${rem("15px")} 0 ${rem("10px")} 0;
`;

export const Day = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme("mode", {
    dark: "var(--light)",
  })};

  svg {
    width: auto;
    height: ${rem("40px")};
    fill: ${icons};
  }

  &.today {
    --shadow: 0 0 ${rem("15px")} 0 rgba(33, 33, 33, 0.3);

    margin-top: ${rem("-35px")};
    margin-bottom: ${rem("-30px")};
    border-radius: 10px;
    background-color: var(--pink);
    color: var(--light);
    -moz-box-shadow: var(--shadow);
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);

    svg {
      fill: var(--light);
    }
  }

  > div {
    &.temp {
      margin: ${rem("15px")} 0 ${rem("10px")} 0;
      font-weight: var(--fontBlack);
    }
  }

  &:first-child,
  &:last-child {
    display: none;
  }

  @media ${device.s} {
    &:first-child,
    &:last-child {
      display: inherit;
    }

    > div {
      &.temp {
        font-size: 1.5rem;
      }
    }

    svg {
      height: ${rem("50px")};
    }
  }
`;
