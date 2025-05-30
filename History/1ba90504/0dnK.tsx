import { createContext } from 'react';

const TableContext = createContext();

function Table({ children }: { children: ChildNode }) {
  return (
    <TableContext.Provider>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}
