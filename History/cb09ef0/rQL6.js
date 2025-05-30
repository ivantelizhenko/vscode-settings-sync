import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useDelete() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isDeleting, mutate: delete } = useMutation({
    mutationFn: bookingId => deleteBooking(bookingId),
    onSuccess: data => {
      toast.success(`Booking #${data.id} successfully deleted`);
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },
    onError: () => {
      toast.error('There was an error while deleting');
    },
  });

  return { isDeleting, delete };
}
