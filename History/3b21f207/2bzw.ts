import { useMutation } from "@tanstack/react-query";
import { resetGame as resetGameAPI } from "../service/supabase";

function useresetGame() {
  const { mutateAsync: resetGame } = useMutation({
    mutationFn: () => resetGameAPI(JSON.stringify(board)),
  });

  return { resetGame };
}

export default useresetGame;
