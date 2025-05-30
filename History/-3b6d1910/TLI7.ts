import { useSearchParams } from 'react-router';
import { useFilters } from '../contexts/filtersContext/FiltersContext';
import { useCallback } from 'react';

export function useDeleteFilter() {
  const { deleteFilterState } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  // function deleteFilter(name: string) {
  //   deleteFilterState(name);
  //   searchParams.delete(name);
  //   setSearchParams(searchParams);
  // }
  const deleteFilter = useCallback(
    (name: string) => {
      deleteFilterState(name);
      searchParams.delete(name);
      setSearchParams(searchParams);
    },
    [deleteFilterState]
  );

  return [deleteFilter];
}
