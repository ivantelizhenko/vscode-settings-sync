import { useQuery } from '@tanstack/react-query';
import { getPlayers as getPlayersAPI } from '../service/supabaseService';

function useGetPlayers() {
  return useQuery({
    queryKey: ['game'],
    queryFn: gameId => getPlayersAPI(),
  });
}

export default useGetPlayers;
