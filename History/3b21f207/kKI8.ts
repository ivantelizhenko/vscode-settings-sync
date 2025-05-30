import { useMutation } from "@tanstack/react-query";
import { resetGame as resetGameAPI } from "../service/supabase";

function useResetGame() {
  const { mutateAsync: resetGame } = useMutation({
    mutationFn: resetGameAPI,
  });

  return { resetGame, isPending };
}

export default useResetGame;
