import { useQuery } from '@tanstack/react-query';
import { getGame as getGameAPI } from '../service/supabaseService';

function useGetGame() {
  return useQuery({
    queryKey: ['game/get'],
    queryFn: (gameId: string) => getGameAPI(gameId),
  });
}

export default useGetGame;
