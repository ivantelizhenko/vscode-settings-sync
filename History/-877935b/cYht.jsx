import styled, { css } from 'styled-components';

// const test = css`
//   text-align: center;
// `;

const test = css`
  /**some style */
`;

const Component = styled.element`
  background-color: ${10 > 5 ? 'yellow' : 'green'} ${test};
`;

const Heading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  ${test}
`;

export default Heading;
