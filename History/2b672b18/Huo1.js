import { useSearchParams } from 'react-router-dom';

export function useFiltering({ data, name }) {
  const filterValue = useSearchParams.get(name) || 'all';

  let filteredCabins;
  if (filterValue === 'all') filteredCabins = data;
  if (filterValue === 'no-discount')
    filteredCabins = data.filter(el => el.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = data.filter(el => el.discount > 0);
}
