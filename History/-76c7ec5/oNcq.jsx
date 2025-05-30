import styled, { css } from "styled-components";

const Border = styled.div`
  --padding: ${(props) => props.$gap + "px"};

  ${(p) =>
    p.$axis === "horizontal" &&
    css`
      height: 1px;
      background-color: var(--color-gray-300);
      margin: var(--padding) 0;
    `}

  ${(p) =>
    p.axis === "vertical" &&
    css`
      border-left: 1px solid var(--color-gray-300);
      padding: 0 var(--padding);
    `}
`;

Border.defaultProps = { $axis: "horizontal" };

export default Border;
