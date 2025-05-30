import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 13px;

  font-size: 2.4rem;
  border: none;
  /* padding: 1.2rem; */

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: #c4c4be;
    background-color: #2e696f;
  }
  background-color: #429ea6;
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
