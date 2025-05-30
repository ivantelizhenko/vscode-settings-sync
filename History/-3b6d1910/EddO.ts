import { useSearchParams } from 'react-router';

export function useDeleteFilter() {
  const [deleteFilterContext] = useDeleteFilter();
  const [searchParams, setSearchParams] = useSearchParams();

  function deleteFilter(name: string) {
    deleteFilterContext(name);
    searchParams.delete('searchParams');
  }
  return [deleteFilter];
}
