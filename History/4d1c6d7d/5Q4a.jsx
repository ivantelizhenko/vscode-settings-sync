import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;

  ${props => props.type === 'horizontaly' && css``}
`;

export default Row;
