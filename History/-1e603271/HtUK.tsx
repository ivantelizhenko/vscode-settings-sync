import styled from "styled-components";
import Button from "./Button";

const ButtonStyled = styled(Button)`
  width: 200px;
  height: 100px;
  background-color: pink;

  &:not(:last-child) {
    /* content: "/"; */
    /* background-color: green; */
  }
`;

const Box = styled.div``;

function App() {
  return (
    <Box>
      <Button>Click</Button>
    </Box>
  );
}

export default App;
