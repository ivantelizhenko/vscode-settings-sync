import styled from 'styled-components';
import UsersLists from './UsersLists';
import Heading from '../headings/Heading';
import { ReactNode } from 'react';
import Table from './Table';

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
    <Table>
      <Table.HeadingsContainer>
        <Table.HeadingsContainer as="h5">Full Name</Table.HeadingsContainer>
        <Table.HeadingsContainer as="h5">Department</Table.HeadingsContainer>
        <Table.HeadingsContainer as="h5">Country</Table.HeadingsContainer>
        <Table.HeadingsContainer as="h5">Status</Table.HeadingsContainer>
        <div></div>
      </Table.HeadingsContainer>
      <UsersLists />
    </Table>
  );
}

export default UsersTable;
