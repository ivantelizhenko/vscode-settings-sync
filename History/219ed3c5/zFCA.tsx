import styled from "styled-components";
import KingWhite from "./KingWhite";

function App() {
  return (
    <Wrapper>
      <KingWhite size={100} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  background-color: green;
`;

export default App;
