import TableOperations from '../../ui/TableOperations.jsx';
import Filter from '../../ui/Filter.jsx';
import SortBy from '../../ui/SortBy.jsx';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name A-Z' },
          { value: 'name-desc', label: 'Sort by name Z-A' },
          { value: 'regularPrice-asc', label: 'Sort by price' },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
