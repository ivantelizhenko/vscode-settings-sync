import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addOpponent as addOpponentAPI } from '../service/supabaseService';

function useAddOpponent() {
  const queryClient = useQueryClient();
  const gameId = 

  const { mutateAsync: addOpponent } = useMutation<
    void,
    Error,
    { gameId: string; userId: string }
  >({
    mutationFn: ({ gameId, userId }) => addOpponentAPI(gameId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['game'] });
    },
  });

  return { addOpponent };
}

export default useAddOpponent;
