import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4.8rem;
      font-weight: 600;
    `}
`;

export default Heading;
