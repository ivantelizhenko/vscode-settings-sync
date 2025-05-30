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
      <Button variant="outline" size="small">
        Click
      </Button>
      <Button variant="ghost" size="medium">
        Click
      </Button>
      <Button variant="fill" size="large">
        Click
      </Button>
    </Box>
  );
}

export default App;
