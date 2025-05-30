import { useSearchParams } from 'react-router';
import { useFilters } from '../contexts/filtersContext/FiltersContext';

export function useDeleteFilter() {
  const [deleteFilterContext] = useDeleteFilter();
  const { deleteFilter } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  function deleteFilter(name: string) {
    deleteFilterContext(name);
    searchParams.delete('searchParams');
    setSearchParams(searchParams);
  }
  return [deleteFilter];
}
