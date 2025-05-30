import { useSearchParams } from 'react-router-dom';

export function useFiltering({ data, name }) {
  const filterValue = useSearchParams.get('discount') || 'all';

  const [filtering] = useFiltering(cabins, 'discount');
  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter(cabin => cabin.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter(cabin => cabin.discount > 0);
}
