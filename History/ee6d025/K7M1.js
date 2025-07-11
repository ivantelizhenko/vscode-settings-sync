import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getBooking } from '../../services/apiBookings';

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking'],
    queryFn: getBooking(bookingId),
  });

  return {
    isLoading,
    booking,
    error,
  };
}
