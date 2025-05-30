import styled from "styled-components";
import KingWhite from "./KingWhite";

function App() {
  return (
    <Wrapper>
      <KingWhite size={100} side="white" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export default App;
