import styled from "styled-components";
import { rem } from "polished";

export const Loading = styled.div`
  border: 10px solid hsla(0, 0%, 48%, 0.5);
  border-top-color: var(--pink);
  border-radius: 50%;
  width: ${rem("50px")};
  height: ${rem("50px")};
  animation: rotation 0.8s ease infinite;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
