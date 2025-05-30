import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import Donate from "./components/Donate";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 48px 16px;
`;

export default App;
