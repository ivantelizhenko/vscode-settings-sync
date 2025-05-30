import UsersLists from './UsersLists';

import Table from './Table';

function UsersTable() {
  return (
    <Table>
      <Table.HeadingsContainer>
        <Table.HeadingsContainer as="h5">Full Name</Table.HeadingsContainer>
        <Table.HeadingsContainer as="h5">Department</Table.HeadingsContainer>
        <Table.HeadingsContainer as="h5">Country</Table.HeadingsContainer>
        <Table.HeadingsContainer as="h5">Status</Table.HeadingsContainer>
        <Table.HeadingsContainer as="div"></Table.HeadingsContainer>
      </Table.HeadingsContainer>
      <Table.TableList>
        <UsersLists />
      </Table.TableList>
    </Table>
  );
}

export default UsersTable;
