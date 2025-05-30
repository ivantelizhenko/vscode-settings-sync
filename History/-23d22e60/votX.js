import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateSetting } from '../../services/apiSettings';

export function useEditSetting() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: newSetting => updateSetting(newSetting),
    onSuccess: () => {
      toast.success('Setting successfully edited!');

      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
    onError: err => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
