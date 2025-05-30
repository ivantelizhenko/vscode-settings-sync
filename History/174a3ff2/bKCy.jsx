import React from "react";
import styled from "styled-components";

import { QUERIES, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <Header>
        <LeftColumn>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
          </Breadcrumbs>
        </LeftColumn>
        <MainColumn>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </MainColumn>
      </Header>
      <ColumnsWrapper>
        <MainColumn>
          <ShoeGrid />
        </MainColumn>
        <LeftColumn>
          <ShoeSidebar />
        </LeftColumn>
      </ColumnsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --gap: 32px;

  display: flex;
  flex-direction: column;
  gap: var(--gap);
`;

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: baseline;
`;

const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: var(--gap);
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  align-self: start;
  position: sticky;
  top: 0;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  margin-right: auto;
`;

export default ShoeIndex;
