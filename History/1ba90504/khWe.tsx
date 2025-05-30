import { createContext } from 'react';

const TableContext = createContext(null);

function Table({
  columns,
  children,
}: {
  columns: string;
  children: ChildNode;
}) {
  return (
    <TableContext.Provider value={columns}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}
