import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import Donate from "./components/Donate";
import { useState } from "react";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => setShowMobileMenu(true);
  const handleCloseMobileMenu = () => setShowMobileMenu(false);

  return (
    <Wrapper>
      <Header onShowMobileMenu={handleShowMobileMenu} />
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
