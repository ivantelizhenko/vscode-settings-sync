import styled from 'styled-components';

const StyledEmpty = styled.p`
  width: 100%;
  text-align: center;
  font-size: 5.6rem;
  color: #c4c4c4;
  font-weight: 700;
  text-transform: lowercase;
`;

function Empty() {
  return <StyledEmpty>empty</StyledEmpty>;
}

export default Empty;
