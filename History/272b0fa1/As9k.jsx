import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 130px;

  font-size: 2rem;
  border: none;
  padding: 0.6rem;

  height: 3.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: #c4c4be;
    background-color: #2e696f;
  }
  /* background-color: #fcfcfc; */
  /* color: #525252; */
  color: #f9f9f9;
  background-color: #e9806e;
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
