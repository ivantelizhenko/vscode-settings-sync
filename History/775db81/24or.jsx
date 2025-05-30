import styled from "styled-components";
import Header from "./components/Header";

import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("cardsList");

  return (
    <Wrapper>
      <Header setPage={setCurrentPage} />
      <Main page={currentPage} setPage={setCurrentPage} />
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
