import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteGame as deleteGameAPI } from '../service/supabaseService';

function useDeleteGame() {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteGame } = useMutation<void, Error, string>({
    mutationFn: deleteGameAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['game'] });
    },
  });

  return { deleteGame };
}

export default useDeleteGame;
