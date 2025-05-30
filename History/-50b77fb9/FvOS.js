import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export function useUser() {
  const x = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });
  console.log(x);
  const { isLoading, data: user } = x;
  return { isLoading, user, isAuthenticated: user?.role === 'authenticated' };
}
