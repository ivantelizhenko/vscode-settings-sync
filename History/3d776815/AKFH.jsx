import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 4.8rem;
      font-weight: 600;
    `}

  ${props =>
    props.as === 'h2' &&
    css`
      font-size: 3.6rem;
      font-weight: 800;
    `}

  line-height: 1.4;
  /* transition: all 2s; */
`;

export default Heading;
