import { useMutation } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created!');

      queryClient.invalidateQueries({ queryKey: ['cabins'] });

      resizeTo();
    },
    onError: err => toast.error(err.message),
  });
}
