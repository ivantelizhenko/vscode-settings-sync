import { useSearchParams } from 'react-router';

function useDeleteFilter() {
  const [deleteFilterContext] = useDeleteFilter();
  const [searchParams, setSearchParams] = useSearchParams();

  function deleteFilter(name) {
    deleteFilterContext(name);
  }
}
