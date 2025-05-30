import { useQuery } from "@tanstack/react-query";
import { getGame } from "../service/supabase";

function useGetGame(gameId: string) {
  return useQuery({
    queryKey: ["game"],
    queryFn: () => getGame(gameId),
    enabled: !!gameId,
    refetchInterval: 30 * 1000,
  });
}

export default useGetGame;
