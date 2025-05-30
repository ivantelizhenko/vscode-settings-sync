import { useMutation } from "@tanstack/react-query";
import { updateGame as updateGameAPI } from "../service/supabase";
import { useStore } from "../contexts/store";

function useDoMove() {
  const { gameId } = useStore();

  const { mutateAsync: doMove, isPending } = useMutation({
    mutationFn: (data: { userIdX: string } | { userIdO: string }) =>
      updateGameAPI({ gameId, updates: data }),
  });

  return { doMove, isPending };
}

export default useDoMove;
