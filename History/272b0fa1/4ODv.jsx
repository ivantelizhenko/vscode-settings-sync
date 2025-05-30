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
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
