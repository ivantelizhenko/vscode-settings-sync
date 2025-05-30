import TableOperations from '../../ui/TableOperations.jsx';
import Filter from '../../ui/Filter.jsx';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" />
    </TableOperations>
  );
}

export default CabinTableOperations;
