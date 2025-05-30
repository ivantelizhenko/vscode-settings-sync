import { useMutation } from '@tanstack/react-query';
import { updateBoard as updateBoardAPI } from '../service/supabaseService';
import { useAppSelector } from '../../store/store';

function useUpdateBoard() {
  const { board, prevTwoMoves } = useAppSelector(state => state.board);
  const gameId = useAppSelector(state => state.status.gameId)!;
  // const lastMove = prevTwoMoves.at(-1)!;

  const { mutateAsync: updateBoard } = useMutation({
    mutationFn: () => updateBoardAPI(board!, gameId),
  });

  return { updateBoard };
}

export default useUpdateBoard;
