import { useQuery } from "@tanstack/react-query";
import { getGames } from "../service/supabase";

function useGetGame() {
  return useQuery({
    queryKey: ["game"],
    queryFn: getGames,
    refetchInterval: 10000,
  });
}

export default useGetGame;
