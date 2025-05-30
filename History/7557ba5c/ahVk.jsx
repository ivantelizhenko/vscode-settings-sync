import React from "react";
import styled from "styled-components";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <Wrapper>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
