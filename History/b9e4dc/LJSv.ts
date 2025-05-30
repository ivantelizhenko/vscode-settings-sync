import { useQuery } from '@tanstack/react-query';
import { getGame as getGameAPI } from '../service/supabaseService';

function useGetGame(gameId: string) {
  return useQuery({
    queryKey: ['game/get', gameId],
    queryFn: () => getGameAPI(gameId),
  });
}

export default useGetGame;
