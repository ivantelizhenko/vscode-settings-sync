import { createContext } from 'react';

const TableContext = createContext(null);

function Table({ children }: { children: ChildNode }) {
  return (
    <TableContext.Provider>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}
