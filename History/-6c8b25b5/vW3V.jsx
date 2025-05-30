import styled from "styled-components";
import { QUERIES, WEIGHTS } from "../constants";

function Heading({ children, ...delegated }) {
  return <StyledHeader {...delegated}>{children}</StyledHeader>;
}

const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: ${WEIGHTS.semiBold};

  @media ${QUERIES.laptopAndUp} {
    font-size: 4rem;
  }
`;

export default Heading;
