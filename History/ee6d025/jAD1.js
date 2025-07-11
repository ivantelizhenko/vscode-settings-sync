import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';
import { useParams, useSearchParams } from 'react-router-dom';

export function useBooking() {
  const searchParams = useParams();
  const id = searchParams.get();
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
