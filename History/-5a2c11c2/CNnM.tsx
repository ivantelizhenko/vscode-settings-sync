import styled from 'styled-components';

const StyledEmpty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

function Empty({ message }) {
  return <StyledEmpty>{message}</StyledEmpty>;
}

export default Empty;
