import styled from "styled-components";
import { rem, darken } from "polished";

export const Wrapper = styled.div`
  margin: ${rem("60px")} 0 ${rem("45px")} 0;

  a {
    color: var(--pink);
    font-weight: var(--fontBlack);
    text-decoration: none;

    &:hover {
      color: ${darken(0.1, "#A400C9")};
    }
  }
`;
