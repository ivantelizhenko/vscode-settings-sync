import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  background-color: #429ea6;
  border: none;

  font-size: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    color: #aeaea8;
    background-color: #2e696f;
  }
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
