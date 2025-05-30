import { useMutation } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useChecking() {
  const { isLoading: isCheckingIn, mutate: checkin } = useMutation({
    mutationFn: bookingId =>
      updateBooking(bookingId, { status: 'checked-in', isPaid: true }),
    onSuccess: data => {
      toast.success(`Booking #${data.id}`);
    },
  });

  return { isCheckingIn, checkin };
}
