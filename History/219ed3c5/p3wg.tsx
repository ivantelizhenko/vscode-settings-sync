import styled from "styled-components";
import IconKing from "./Kink";

function App() {
  return (
    <Wrapper>
      <IconKing size={100} />
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
