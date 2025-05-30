import styled from "styled-components";

const StyledLoginButtons = styled.div`
  display: flex;
  background-color: red;
`;

function LoginButtons() {
  return (
    <StyledLoginButtons>
      <div>button1</div>
      <div>button2</div>
    </StyledLoginButtons>
  );
}

export default LoginButtons;
