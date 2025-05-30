import { createContext } from 'react';

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
  children: ChildNode;
}) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: ChildNode }) {}
