import { useMutation } from "@tanstack/react-query";
import { updateGame as updateGameAPI } from "../service/supabase";
import { useStore } from "../contexts/store";

function useDoMove() {
  const { gameId, board, turn } = useStore();
  console.log(board, turn);

  const { mutateAsync: doMove, isPending } = useMutation({
    mutationFn: (data: { userIdX: string } | { userIdO: string }) =>
    {
      const boardForAPI = JSON.stringify(board)
      const now = new Date();
      updateGameAPI({ gameId, updates: {board:boardForAPI, updatedAt: now  } }),
      console.log("hey"),
    }
  });

  return { doMove, isPending };
}

export default useDoMove;
