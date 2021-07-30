import styled from "styled-components";
import { rem, darken } from "polished";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .hydrated {
    width: 100%;
    max-width: ${rem("310px")};
  }

  .duet-date__input {
    border: 2px solid ${darken(0.2, "#eeeeee")};
    height: ${rem("40px")};
  }

  .duet-date__toggle {
    top: 2px;
    right: 2px;
    width: ${rem("44px")};
    height: calc(100% - 4px);
    box-shadow: inset 2px 0 0 ${darken(0.2, "#eeeeee")};

    svg {
      fill: red;
    }
  }

  .duet-date__dialog-content {
    margin-left: 0;
  }
`;
