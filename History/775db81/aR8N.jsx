import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cta from "./components/Cta";

function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <Cta />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default App;
