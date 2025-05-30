import styled from "styled-components";

function Heading({ children, ...delegated }) {
  return <StyledHeader {...delegated}>{children}</StyledHeader>;
}

const StyledHeader = styled.h1``;

export default Heading;
