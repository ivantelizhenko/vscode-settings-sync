import { createContext, ReactElement, useContext } from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
  border: 1px solid #e5e7eb;

  font-size: 1.4rem;
  background-color: #fff;
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: #f9fafb;
  border-bottom: 1px solid #f3f4f6;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: #4b5563;
`;

const TableContext = createContext({});

function Table({
  columns,
  children,
}: {
  columns: string;
  children: ReactElement;
  role: string;
}) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: ReactElement }) {
  const { columns } = useContext(TableContext);

  return <StyledHeader $columns={columns}>{children}</StyledHeader>;
}
