import { useSearchParams } from 'react-router';
import { useFilters } from '../contexts/filtersContext/FiltersContext';

export function useDeleteFilter() {
  const { deleteFilter } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  function delete1Filter(name: string) {
    deleteFilter(name);
    searchParams.delete('searchParams');
    setSearchParams(searchParams);
  }
  return [delete1Filter];
}
