import styled from "styled-components";
import { QUERIES, WEIGHTS } from "../constants";

function Heading({ children, ...delegated }) {
  return <StyledHeader {...delegated}>{children}</StyledHeader>;
}

const StyledHeader = styled.h1`
  --size: ${(props) => props.desktopSize + "px"};

  font-size: 2rem;
  font-weight: ${WEIGHTS.semiBold};

  @media ${QUERIES.laptopAndUp} {
    font-size: var(--size, 2rem);
  }
`;

export default Heading;
