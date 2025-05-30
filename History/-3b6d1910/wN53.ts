import { useSearchParams } from 'react-router';
import { useAppState } from '../contexts/appContext/AppContext';

export function useDeleteFilter() {
  const [deleteFilterContext] = useDeleteFilter();
  const { deleteFilter } = useAppState();
  const [searchParams, setSearchParams] = useSearchParams();

  function deleteFilter(name: string) {
    deleteFilterContext(name);
    searchParams.delete('searchParams');
    setSearchParams(searchParams);
  }
  return [deleteFilter];
}
