import { Button } from "@mui/material";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  width: 200px;
  height: 100px;
  background-color: pink;

  &:not(:last-child)::after {
    // content: '/'
    background-color: green !important;
  }
`;

const Box = styled.div``;

function App() {
  return (
    <Box>
      <ButtonStyled>Click</ButtonStyled>
      <ButtonStyled>Click</ButtonStyled>
      <ButtonStyled>Click</ButtonStyled>
      <ButtonStyled>Click</ButtonStyled>
    </Box>
  );
}

export default App;
