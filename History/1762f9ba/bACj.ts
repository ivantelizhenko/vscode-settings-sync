import { useQuery } from '@tanstack/react-query';
import { getPlayers as getPlayersAPI } from '../service/supabaseService';

function useGetPlayers(gameId: string | undefined) {
  return useQuery({
    queryKey: ['game/players', gameId],
    queryFn: () => getPlayersAPI(gameId),
  });
}

export default useGetPlayers;
