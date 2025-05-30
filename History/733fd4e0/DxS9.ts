import { useQuery } from "@tanstack/react-query";
import { getGame } from "../service/supabase";

function useGetGame() {
  return useQuery({
    queryKey: ["game"],
    queryFn: getGame,
    refetchInterval: 30 * 1000,
  });
}

export default useGetGame;
