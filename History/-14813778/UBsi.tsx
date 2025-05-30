import UsersLists from './UsersLists';

import Table from './Table';

function UsersTable() {
  return (
    <Table>
      <Table.HeadingsContainer>
        <Table.TableHeading as="h5">1</Table.TableHeading>
        <Table.TableHeading as="h5">2</Table.TableHeading>
        <Table.TableHeading as="h5">3</Table.TableHeading>
        <Table.TableHeading as="h5">4</Table.TableHeading>
        <Table.TableHeading as="div"> </Table.TableHeading>
      </Table.HeadingsContainer>
      <Table.TableList>
        <UsersLists />
      </Table.TableList>
    </Table>
  );
}

export default UsersTable;
