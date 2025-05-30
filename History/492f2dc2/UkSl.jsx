import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';

import { useCabins } from '../cabins/useCabins';

function UserTable() {
  const { isLoading, cabins } = useCabins();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resource="cabins" />;

  return (
    <Menus>
      {/* <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"> */}
      <Table columns="0.6fr 1.8fr 2.2fr 1.8fr 1fr">
        <Table.Header>
          <div></div>
          <div>Id</div>
          <div>fullName</div>
          <div>Email</div>

          <div></div>
        </Table.Header>

        <Table.Body data={cabins} render={cabin => {}} />
      </Table>
    </Menus>
  );
}

export default UserTable;
