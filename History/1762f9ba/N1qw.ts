import { useQuery } from '@tanstack/react-query';
import { getPlayers as getPlayersAPI } from '../service/supabaseService';

function useGetPlayers(gameId: string) {
  console.log(gameId);
  const { data } = useQuery({
    queryKey: ['game/players', gameId],
    queryFn: () => getPlayersAPI(gameId),
  });

  console.log(data);

  return data!.at(0);
}

export default useGetPlayers;
