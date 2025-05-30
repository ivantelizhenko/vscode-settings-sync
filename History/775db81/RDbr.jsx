import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
`;

export default App;
