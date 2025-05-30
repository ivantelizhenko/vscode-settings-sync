import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addOpponent as addOpponentAPI } from '../service/supabaseService';

function useAddOpponent() {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteGame } = useMutation({
    mutationFn: deleteGameAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['game'] });
    },
  });

  return { deleteGame };
}

export default useDeleteGame;
