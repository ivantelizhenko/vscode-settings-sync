import styled, { css } from "styled-components";

const Border = styled.div`
  --padding: ${(props) => props.$gap + "px"};

  ${(p) =>
    p.axis === "horizontal" &&
    css`
      border-left: 1px solid var(--color-gray-300);
      padding: 0 var(--padding);
    `}

  ${(p) =>
    p.axis === "vertical" &&
    css`
      border-left: 1px solid var(--color-gray-300);
      padding: 0 var(--padding);
    `}

  border-bottom: 1px solid var(--color-gray-300);
  padding: var(--padding) 0;
`;

export default Border;
