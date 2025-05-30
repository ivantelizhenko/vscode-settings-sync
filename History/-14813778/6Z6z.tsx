import styled from 'styled-components';
import UsersLists from './UsersLists';
import Heading from '../headings/Heading';
import { ReactNode } from 'react';

const StyledUsersTable = styled.div`
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
`;

function UsersTable() {
  return (
    <StyledUsersTable>
      <StyledHeadingsContainer>
        <Heading as="h5">Full Name</Heading>
        <Heading as="h5">Department</Heading>
        <Heading as="h5">Country</Heading>
        <Heading as="h5">Status</Heading>
        <div></div>
      </StyledHeadingsContainer>
      <UsersLists />
    </StyledUsersTable>
  );
}

export default UsersTable;

function Table({ children }: { children: ReactNode }) {
  return <span>{children}</span>;
}

function HeadingsContainer({ children }: { children: ReactNode }) {
  return <StyledHeadingsContainer>{children}</StyledHeadingsContainer>;
}
