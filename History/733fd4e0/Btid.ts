import { useQuery } from "@tanstack/react-query";
import { getGames } from "../service/supabase";
import { useEffect, useRef } from "react";

function useGetGame() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const query = useQuery({
    queryKey: ["game"],
    queryFn: getGames,
    staleTime: 0,
  });

  useEffect(() => {
    if (query.isSuccess) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        query.refetch();
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [query.isSuccess, query.dataUpdatedAt, query.refetch]);

  return query;
}

export default useGetGame;
