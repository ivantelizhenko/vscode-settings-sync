import { useMutation } from '@tanstack/react-query';
import { setGameOver as setGameOverAPI } from '../service/supabaseService';
import { useAppSelector } from '../../store/store';

function useSetGameOver() {
  const gameId = useAppSelector(state => state.status.gameId)!;

  const { mutateAsync: setGameOver } = useMutation({
    mutationFn: () => setGameOverAPI(gameId),
  });

  return { setGameOver };
}

export default useSetGameOver;
