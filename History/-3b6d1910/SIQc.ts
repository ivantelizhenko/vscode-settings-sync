import { useSearchParams } from 'react-router';
import { useFilters } from '../contexts/filtersContext/FiltersContext';

export function useDeleteFilter() {
  const [deleteFilter] = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  function deleteFilter1(name: string) {
    deleteFilter(name);
    searchParams.delete('searchParams');
    setSearchParams(searchParams);
  }
  return [deleteFilter1];
}
