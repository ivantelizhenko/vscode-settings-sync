import React from "react";
import styled from "styled-components";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCardWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeCardWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  overflow: auto;
  max-height: 100%;
`;

const ShoeCardWrapper = styled.div`
  flex: 1;
  min-width: 300px;
`;

export default ShoeGrid;
