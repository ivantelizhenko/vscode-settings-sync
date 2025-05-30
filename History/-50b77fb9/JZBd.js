import { useQuery } from '@tanstack/react-query';

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
