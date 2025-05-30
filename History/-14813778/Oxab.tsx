import { useSearchParams } from 'react-router';
import Table from '../../../components/Table';
import UsersLists from './UsersLists';

function UsersTable() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSetSortValue(e) {
    console.log(e.target);
  }

  return (
    <>
      <Table onClick={handleSetSortValue}>
        <Table.HeadingsContainer>
          <Table.TableHeading as="h5">Full Name</Table.TableHeading>
          <Table.TableHeading as="h5">Department</Table.TableHeading>
          <Table.TableHeading as="h5">Country</Table.TableHeading>
          <Table.TableHeading as="h5">Status</Table.TableHeading>
          <Table.TableHeading as="div"> </Table.TableHeading>
        </Table.HeadingsContainer>
        <Table.TableList>
          <UsersLists />
        </Table.TableList>
      </Table>
    </>
  );
}

export default UsersTable;
