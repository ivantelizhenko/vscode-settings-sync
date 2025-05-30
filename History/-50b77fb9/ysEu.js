import { useQuery } from '@tanstack/react-query';

export function useUser() {
  const { isLoading, data: user } = useQuery;
}
