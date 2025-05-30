import { useQuery } from '@tanstack/react-query';
import { createUser } from '../../services/apiUsers';

export function useCreateUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['users'],
    queryFn: createUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === 'authenticated' };
}
