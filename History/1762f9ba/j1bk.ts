import { useQuery } from '@tanstack/react-query';
import { getPlayer as getPlayerAPI } from '../service/supabaseService';
import { useAppSelector } from '../../store/store';

function useGetPlayers() {
  const gameId = useAppSelector(state => state.status.gameId);

  return useQuery({
    queryKey: ['game', gameId],
    queryFn: () => getGameAPI(gameId!),
  });
}

export default useGetGame;
