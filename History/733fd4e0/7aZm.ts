import { useQuery } from "@tanstack/react-query";
import { getGame } from "../service/supabase";

function useGetGame(gameId: string | null) {
  return useQuery({
    queryKey: ["game"],
    queryFn: () => getGame(gameId!),
    enabled: !!gameId,
    refetchInterval: 30 * 1000,
    onError: (error: Error) => {
      console.error("Failed to fetch game:", error.message);
      // Можна додати toast або іншу обробку помилок
    },
  });
}

export default useGetGame;
