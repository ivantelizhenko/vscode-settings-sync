import { useQuery } from "@tanstack/react-query";
import { getBoard } from "../service/supabase";

function useGetBoard() {
  return useQuery({
    queryKey: ["board"],
    queryFn: getBoard,
  });
}

export default useGetBoard;
