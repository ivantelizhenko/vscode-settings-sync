import Spinner from '../../ui/Spinner';
import CabinRow from '../cabins/CabinRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';

import { useSearchParams } from 'react-router-dom';
import { useCabins } from '../cabins/useCabins';

function UserTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resource="cabins" />;
  // // 1. Filter
  // const filterValue = searchParams.get('discount') || 'all';

  // let filteredCabins;
  // if (filterValue === 'all') filteredCabins = cabins;
  // if (filterValue === 'no-discount')
  //   filteredCabins = cabins.filter(cabin => cabin.discount === 0);
  // if (filterValue === 'with-discount')
  //   filteredCabins = cabins.filter(cabin => cabin.discount > 0);

  // // 2. Sort

  // const sortBy = searchParams.get('sortBy') || 'name-asc';

  // const [field, direction] = sortBy.split('-');
  // const modifier = direction === 'asc' ? 1 : -1;
  // const sortedCabins = filteredCabins.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );

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
