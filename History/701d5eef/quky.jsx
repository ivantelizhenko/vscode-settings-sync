import styled from "styled-components";

const StyledButton = styled.button`
  background-color: rgb(0, 128, 0, 0.2);
  display: flex;
  height: 20%;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.6rem;
  border-radius: 13px;
  border: none;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
`;

function Button({ attr, children }) {
  return <StyledButton className={attr}>{children}</StyledButton>;
}

export default Button;
