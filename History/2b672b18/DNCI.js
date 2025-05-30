import { useSearchParams } from 'react-router-dom';

export function useFiltering({ data, name }) {
  console.log(data);
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get(name) || 'all';

  let filteredElements;
  if (filterValue === 'all') filteredElements = data;

  if (filterValue === 'no-discount')
    filteredElements = data.filter(el => el.discount === 0);
  if (filterValue === 'with-discount')
    filteredElements = data.filter(el => el.discount > 0);

  return { filteredElements };
}
