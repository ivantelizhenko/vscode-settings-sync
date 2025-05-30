import { Button } from "@mui/material";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  width: 200px;
  height: 100px;
  background-color: pink;

  &:not(:last-child)::after {
    // content: '/'
    background-color: pink;
  }
`;

function App() {
  return (
    <div>
      <ButtonStyled>Click</ButtonStyled>
    </div>
  );
}

export default App;
