import styled from "styled-components";
import IconKing from "./IconKing";

function App() {
  return (
    <Wrapper>
      <IconKing size={400} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: red;
`;
