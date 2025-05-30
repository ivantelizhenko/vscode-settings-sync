import styled from 'styled-components';

const StyledEmpty = styled.p``;

function Empty({ message }) {
  return <StyledEmpty>{message}</StyledEmpty>;
}

export default Empty;
