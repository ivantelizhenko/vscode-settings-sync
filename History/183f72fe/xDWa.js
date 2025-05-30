import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCabins';
import { updateCurrentUser } from '../../services/apiAuth';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => updateCurrentUser(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited!');

      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: err => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
