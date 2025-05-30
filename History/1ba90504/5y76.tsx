import { createContext } from 'react';

const TableContext = createContext();

function Table({ children }) {
  return (
    <TableContext.Provider>
      <StyledTable />
    </TableContext.Provider>
  );
}
