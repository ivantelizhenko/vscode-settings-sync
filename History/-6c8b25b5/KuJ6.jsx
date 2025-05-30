import styled, { css } from "styled-components";
import { QUERIES, WEIGHTS } from "../constants";

function Heading({ children, ...delegated }) {
  return <StyledHeader {...delegated}>{children}</StyledHeader>;
}

const StyledHeader = styled.h1`
  ${(props) =>
    props.$size &&
    css`
      --size: ${props.$size} / 16 + "rem";
    `}

  font-weight: ${WEIGHTS.semiBold};
  font-size: var(--size, 2rem);
`;

export default Heading;
