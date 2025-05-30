import styled from 'styled-components';
import { ReactNode } from 'react';

import Heading from './Heading';
import { useSearchParams } from 'react-router';

const StyledTable = styled.div`
  border: 1px solid #e3e8ee;
  max-height: 100vh;

  overflow-y: scroll;
`;

const StyledHeadingsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 20rem auto 20rem 10rem 2.4rem;
  padding: 2.8rem 3.6rem;

  border-bottom: solid 1px #e3e8ee;
  background-color: yellow;
`;

const StyledTableHeading = styled(Heading)`
  background-color: red;
  height: 100%;
`;

function Table({ children }: { children: ReactNode }) {
  return <StyledTable>{children}</StyledTable>;
}

function HeadingsContainer({ children }: { children: ReactNode }) {
  function handleClick(e) {
    console.log(e.target);
  }

  return (
    <StyledHeadingsContainer onClick={handleClick}>
      {children}
    </StyledHeadingsContainer>
  );
}

function TableHeading({ children, as }: { children: ReactNode; as: string }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(e) {
    console.log(e.target.textContent);
  }

  return (
    <StyledTableHeading as={as} onClick={handleClick}>
      {(children as string)?.trim()}
    </StyledTableHeading>
  );
}

function TableList({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

Table.HeadingsContainer = HeadingsContainer;
Table.TableHeading = TableHeading;
Table.TableList = TableList;
export default Table;
