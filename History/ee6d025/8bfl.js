import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';

export function useBooking() {
  const name = useParams();
  console.log(name);
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
