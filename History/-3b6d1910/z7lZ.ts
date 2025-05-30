import { useSearchParams } from 'react-router';
import { useFilters } from '../contexts/filtersContext/FiltersContext';
import { useCallback } from 'react';

export function useDeleteFilter() {
  const { deleteFilterState } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('depatment'));

  const deleteFilter = useCallback(
    (name: string) => {
      deleteFilterState(name);
      searchParams.delete(name);
      setSearchParams(searchParams);
    },
    [deleteFilterState, searchParams, setSearchParams]
  );

  return [deleteFilter];
}
