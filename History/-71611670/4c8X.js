import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin } from '../../services/apiCabins';

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Cabin successfully deleted!');

      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: err => toast.error(err.message),
  });
}
