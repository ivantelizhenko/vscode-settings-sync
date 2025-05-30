import { useQuery } from '@tanstack/react-query';
import { getGame as getGameAPI } from '../service/supabaseService';

function useGetGame() {
  return useQuery({
    queryKey: ['game'],
    queryFn: gameId => getGameAPI(gameId as string),
  });
}

export default useGetGame;
