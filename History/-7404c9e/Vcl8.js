import { useMutation } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';

export function useChecking(id) {
  const { isLoading: isCheckingIn, mutate: checkin } = useMutation({
    mutationFn: () => updateBooking(id),
    onSu,
  });

  return { isCheckingIn, checkin };
}
