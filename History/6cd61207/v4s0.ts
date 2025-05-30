import { useMutation } from '@tanstack/react-query';
import { updateBoard as updateBoardAPI } from '../service/supabaseService';
import { useAppSelector } from '../../store/store';

function useUpdateBoard() {
  const { board, prevTwoMoves } = useAppSelector(state => state.board);
  const gameId = useAppSelector(state => state.status.gameId)!;

  const lastMove =
    prevTwoMoves.length > 1 ? prevTwoMoves.at(-1)! : prevTwoMoves;
  console.log(lastMove);
  const { mutateAsync: updateBoard } = useMutation({
    mutationFn: () => updateBoardAPI(lastMove, board!, gameId),
  });

  return { updateBoard };
}

export default useUpdateBoard;
