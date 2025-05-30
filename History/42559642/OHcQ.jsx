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
      <SortBy options={[{ value: '', label: 'Sort by name A-Z' }]} />
    </TableOperations>
  );
}

export default CabinTableOperations;
