import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/apiUsers';

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === 'authenticated' };
}
