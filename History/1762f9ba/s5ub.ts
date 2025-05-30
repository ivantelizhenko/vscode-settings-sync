import { useQuery } from '@tanstack/react-query';
import { getPlayer as getPlayerAPI } from '../service/supabaseService';

function useGetPlayers() {
  return useQuery({
    queryKey: ['game'],
    queryFn: gameId => getPlayerAPI(gameId!),
  });
}

export default useGetPlayers;
