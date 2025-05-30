import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBoard as updateBoardAPI } from '../service/supabaseService';
import { useAppSelector } from '../../store/store';

function useUpdateBoard() {
  const board = useAppSelector(state => state.board.board);
  const gameId = useAppSelector(state => state.status.id);
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
