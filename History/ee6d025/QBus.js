import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function useBooking() {
  const searchParams = useSearchParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking'],
    queryFn: getBooking(),
  });

  return {
    isLoading,
    booking,
    error,
  };
}
