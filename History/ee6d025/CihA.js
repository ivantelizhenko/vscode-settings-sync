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
    queryKey: ['bookings'],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
  console.log(booking);
  return {
    isLoading,
    booking,
    error,
  };
}
