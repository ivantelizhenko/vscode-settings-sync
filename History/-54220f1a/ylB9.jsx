import React from "react";
import styled from "styled-components";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";
import { QUERIES } from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <Colors>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </Wrapper>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 64px 16px;
  }
`;

export default App;
