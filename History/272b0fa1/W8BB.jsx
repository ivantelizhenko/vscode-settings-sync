import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  background-color: #f7fcfc;
  border: none;

  font-size: 2.4rem;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
