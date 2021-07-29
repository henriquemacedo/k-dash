import styled from "styled-components";
import theme from "styled-theming";
import { rem, darken } from "polished";
import { device } from "@utils/breakpoints";

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
  max-width: 100vw;
  height: ${rem("70px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${rem("15px")};
  z-index: 999;

  .logo {
    display: none;
    width: ${rem("90px")};
    height: calc(100% - ${rem("20px")});

    img {
      width: auto;
      height: 100%;
    }
  }

  .toggle-theme {
    width: ${rem("90px")};
  }

  .select-dropdown {
    width: ${rem("200px")};

    > div {
      border-width: 2px;
      border-color: ${darken(0.2, "#eeeeee")};
      background-color: ${theme("mode", {
        dark: darken(0.2, "#000000"),
      })};

      > div:first-child > div {
        color: ${theme("mode", {
          dark: "var(--grey)",
        })};
      }
    }

    div[id*="react-select-select-local-option"] {
      background-color: transparent !important;
      color: var(--dark);

      &:hover {
        background-color: ${theme("mode", {
          light: "var(--grey)",
          dark: darken(0.75, "#eeeeee"),
        })} !important;
      }
    }
  }

  @media ${device.s} {
    padding: 0 ${rem("30px")};

    .logo {
      display: inherit;
    }
  }
`;
