import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import Donate from "./components/Donate";
import { useState } from "react";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Wrapper>
      <Header />
      <Hero />
      <Cta />
      <Donate />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 48px 16px;
`;

export default App;
