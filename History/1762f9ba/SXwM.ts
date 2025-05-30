import { useQuery } from '@tanstack/react-query';
import { getPlayers as getPlayersAPI } from '../service/supabaseService';

function useGetPlayers(gameId: string) {
  return useQuery({
    queryKey: ['game/players', gameId],
    queryFn: () => getPlayersAPI(gameId),
    enabled: !!gameId,
  });
}

export default useGetPlayers;
