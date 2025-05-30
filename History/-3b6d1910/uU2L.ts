import { useCallback } from 'react';
import { useSearchParams } from 'react-router';

export function useDeleteFilter() {
  const [deleteFilterContext] = useDeleteFilter();
  const [searchParams, setSearchParams] = useSearchParams();

  const deleteFilter = useCallback((name: string) => {
    deleteFilterContext(name);
    searchParams.delete('searchParams');
    setSearchParams(searchParams);
  }, []);
  return [deleteFilter];
}
