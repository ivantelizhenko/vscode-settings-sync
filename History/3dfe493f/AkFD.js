import { useQuery } from '@tanstack/react-query';

export function useTodayActivity() {
  useQuery({ queryFn: getS });
}
