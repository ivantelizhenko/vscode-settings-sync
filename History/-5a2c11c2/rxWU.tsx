import styled from 'styled-components';

const StyledError = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

function Error({ message = 'Unknown error' }: { message: string }) {
  return <StyledError>{message}</StyledError>;
}

export default Error;
