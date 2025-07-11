import styled from "styled-components";
import Header from "./components/Header";

import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("overview");

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
`;

export default App;
