import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';

export function useCabin() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ['booking'],
    queryFn: getBooking,
  });

  return {
    isLoading,
    cabins,
    error,
  };
}
