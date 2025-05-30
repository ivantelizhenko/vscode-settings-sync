import { useQuery } from "@tanstack/react-query";
import { getGame } from "../service/supabase";

function useGetGame(gameId: string | null) {
  console.log(gameId);
  return useQuery({
    queryKey: ["game", gameId],
    queryFn: () => getGame(gameId!),
    enabled: !!gameId,
    retry: false,
  });
}

export default useGetGame;
