import styled from "styled-components";
import theme from "styled-theming";
import { rem, lighten } from "polished";

const cardBg = theme("mode", {
  light: lighten(0.35, "#F44336"),
  dark: lighten(0.25, "#F44336"),
});

export const Wrapper = styled.main`
  margin-top: ${rem("30px")};
  background-color: ${cardBg};
  border: 2px solid var(--danger);
  border-radius: 10px;
  padding: ${rem("15px")};
  color: var(--dark);
  font-weight: var(--fontBlack);

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: ${rem("10px")};
      }

      div.icon {
        margin-right: ${rem("15px")};
        border: 2px solid var(--danger);
        border-radius: 999px;
        background-color: var(--light);
        min-width: ${rem("50px")};
        min-height: ${rem("50px")};
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          width: ${rem("26px")};
          height: ${rem("26px")};
        }
      }
    }
  }
`;
