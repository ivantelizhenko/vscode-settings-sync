import { useMutation } from "@tanstack/react-query";
import { resetGame as resetGameAPI } from "../service/supabase";

function useResetGame() {
  return useMutation({
    mutationFn: resetGameAPI,
  });

  // return { resetGame };
}

export default useResetGame;
