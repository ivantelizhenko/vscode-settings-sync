import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBoard as updateBoardAPI } from '../service/supabaseService';

function useUpdateBoard() {
  const queryClient = useQueryClient();

  const { mutateAsync: updateBoard } = useMutation<
    void,
    Error,
    { gameId: string; userId: string }
  >({
    mutationFn: ({ gameId, userId }) => updateBoardAPI(gameId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['game'] });
    },
  });

  return { updateBoard };
}

export default useUpdateBoard;
