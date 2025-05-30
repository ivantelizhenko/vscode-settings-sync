import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getBooking } from '../../services/apiBookings';

export function useBooking() {
  const { bookingId } = useParams();
  debugger;
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return {
    isLoading,
    booking,
    error,
  };
}
