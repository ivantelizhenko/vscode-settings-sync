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
      <ColumnsWrapper as="header">
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
        <LeftColumn $mustDisappear={false}>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
          </Breadcrumbs>
        </LeftColumn>
      </ColumnsWrapper>
      <ColumnsWrapper>
        <MainColumn>
          <ShoeGrid />
        </MainColumn>
        <LeftColumn $mustDisappear={true}>
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
const ColumnsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  flex-direction: row-reverse;
  gap: var(--gap);
`;
const LeftColumn = styled.div`
  flex-basis: 248px;
  align-self: start;

  ${(props) =>
    props.$mustDisappear
      ? css`
          @media ${QUERIES.tabletAndSmaller} {
            display: none;
          }
        `
      : null}
`;
const MainColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  margin-right: auto;
`;

export default ShoeIndex;

// const ColumnsWrapper = styled.div`
//   display: flex;
//   flex-direction: row-reverse;
//   align-items: baseline;
//   gap: 32px;
// `;

// const LeftColumn = styled.div`
//   flex-basis: 248px;
//   align-self: start;
//   position: sticky;
//   top: 0;

//   @media ${QUERIES.tabletAndSmaller} {
//     display: none;
//   }
// `;

// const MainColumn = styled.div`
//   flex: 1;
// `;
