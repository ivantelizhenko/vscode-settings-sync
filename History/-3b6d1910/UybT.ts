import { useSearchParams } from 'react-router';

function useDeleteFilter() {
  const [deleteFilter as deleteFilterContext] = useDeleteFilter();
  const [searchParams, setSearchParams] = useSearchParams();

  function deleteFilter(name) {
    deleteFilterContext(name);
  }
}
