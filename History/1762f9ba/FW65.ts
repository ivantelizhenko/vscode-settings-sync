import { useQuery } from '@tanstack/react-query';
import { getPlayers as getPlayersAPI } from '../service/supabaseService';

function useGetPlayers(gameId: string) {
  const { data } = useQuery({
    queryKey: ['game', gameId],
    queryFn: () => getPlayersAPI(gameId),
  });

  return data!.at(0);
}

export default useGetPlayers;
