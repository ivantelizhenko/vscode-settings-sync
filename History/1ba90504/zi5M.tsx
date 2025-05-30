import { createContext, ReactElement, useContext } from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
  border: 1px solid #e5e7eb;

  font-size: 1.4rem;
  background-color: #fff;
  border-radius: 7px;
  overflow: hidden;
`;

const TableContext = createContext({});

function Table({
  columns,
  children,
}: {
  columns: string;
  children: ReactElement;
}) {
  return (
    <TableContext.Provider role='table' value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: ReactElement }) {
  const { columns } = useContext(TableContext);

  return <StyledHeader 
}
