import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${props =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
      
    ${props =>
    props.as === 'h3' &&
    css`
      font-size: 1rem;
      font-weight: 500;
    `}


  line-height: 1.4;
`;

export default Heading;

const Component = styled.element`
  ${props =>
    props.propName === true &&
    css`
      /** some style */
    `}
  ${props =>
    props.propName === false &&
    css`
      /** some style */
    `} /** some style */
`;
