import { useQuery } from "@tanstack/react-query";
import { getGame } from "../service/supabase";
import { useParams } from "react-router-dom";

function useGetGame(gameId: string | null) {
  const { id: gameIdFromParams } = useParams();

  return useQuery({
    queryKey: ["game", gameId],
    queryFn: () => getGame(gameId || (gameIdFromParams as string)),
    enabled: !!gameId,
    refetchInterval: 30 * 1000,
  });
}

export default useGetGame;
