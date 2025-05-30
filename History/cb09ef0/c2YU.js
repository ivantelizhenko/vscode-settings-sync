import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useDelete() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleting } = useMutation({
    mutationFn: bookingId => deleteBooking(bookingId),
    onSuccess: data => {
      toast.success(`Booking #${data.id} successfully deleted`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error('There was an error while checking out');
    },
  });

  return { isDeleting, deleting };
}
