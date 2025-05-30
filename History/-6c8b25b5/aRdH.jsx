import styled from "styled-components";
import { WEIGHTS } from "../constants";

function Heading({ children, ...delegated }) {
  return <StyledHeader {...delegated}>{children}</StyledHeader>;
}

const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: ${WEIGHTS.semiBold};
`;

export default Heading;
