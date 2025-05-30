import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/apiUsers';

export function useCabins() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return {
    isLoading,
    user,
    error,
  };
}
