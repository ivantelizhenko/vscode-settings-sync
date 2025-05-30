import { createContext } from 'react';

const TableContext = createContext();

function Table({ children }:{children: }) {
  return (
    <TableContext.Provider>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}
