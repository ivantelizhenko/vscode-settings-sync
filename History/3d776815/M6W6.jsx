import styled from "styled-components";

const StyledHeading = styled.h1`
  ${(props) => props.as === "h1"}
  background-color: orange;
`;

function Heading() {
  return <StyledHeading>Heading</StyledHeading>;
}

export default Heading;
