import { updateBooking } from '../../services/apiBookings';

export function useChecking(id) {
  const { isLoading: isCheckingIn, mutate: checkin } = useMutate({
    mutationFn: () => updateBooking(id),
    onSu,
  });

  return { isCheckingIn, checkin };
}
