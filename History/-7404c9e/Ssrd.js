import { useMutation } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';

export function useChecking() {
  const { isLoading: isCheckingIn, mutate: checkin } = useMutation({
    mutationFn: bookingId =>
      updateBooking(bookingId, { status: 'checked-in', isPaid: true }),
    onSu,
  });

  return { isCheckingIn, checkin };
}
