import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;

  ${props =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
    `}
  ${props => props.type === 'vertical' && css``}
`;

export default Row;
