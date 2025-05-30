import styled, { css } from "styled-components";

const StyledHeading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 20rem;
      font-weight: 600;
    `}
  background-color: orange;
`;

function Heading() {
  return <StyledHeading>Heading</StyledHeading>;
}

export default Heading;
