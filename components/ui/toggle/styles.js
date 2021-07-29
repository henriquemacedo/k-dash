import styled from "styled-components";
import theme from "styled-theming";
import { rem, darken } from "polished";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  align-items: center;

  svg {
    width: auto;
    height: ${rem("20px")};

    &.light {
      margin-right: ${rem("5px")};
      fill: #ffde03;
    }

    &.dark {
      margin-left: ${rem("5px")};
      fill: ${theme("mode", {
        light: "var(--dark)",
        dark: darken(0.2, "#eeeeee"),
      })};
    }
  }
`;

export const Input = styled.input`
  position: absolute;

  &[type="checkbox"] {
    width: 0;
    height: 0;
    visibility: hidden;
  }

  &:checked + label {
    background: var(--light);
    transition-duration: 0.3s;

    &:after {
      left: calc(100% - ${rem("2px")});
      transform: translateX(-100%);
    }
  }
`;

export const Label = styled.label`
  position: relative;
  border: 2px solid ${darken(0.2, "#eeeeee")};
  border-radius: 999px;
  background: var(--dark);
  width: ${rem("40px")};
  height: ${rem("20px")};
  display: block;
  text-indent: -9999px;
  transition-duration: 0.3s;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    background: ${darken(0.2, "#eeeeee")};
    border-radius: 999px;
    transition: 0.3s;
  }
`;
