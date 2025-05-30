import { useQuery } from '@tanstack/react-query';
import { getPlayers as getPlayersAPI } from '../service/supabaseService';

function useGetPlayers() {
  return useQuery({
    queryKey: ['game/players'],
    queryFn: gameId => getPlayersAPI(gameId),
  });
}

export default useGetPlayers;
