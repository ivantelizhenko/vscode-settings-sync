import { useQuery } from "@tanstack/react-query";
import { getGames } from "../service/supabase";

function useGetGame() {
  return useQuery({
    queryKey: ["game"],
    queryFn: getGames,
    staleTime: 1_000,
  });
}

export default useGetGame;
