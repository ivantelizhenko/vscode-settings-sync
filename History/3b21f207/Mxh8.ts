import { useMutation } from "@tanstack/react-query";
import { resetGame as resetGameAPI } from "../service/supabase";

function useResetGame() {
  const { mutateAsync: resetGame, isPending } = useMutation({
    mutationFn: resetGameAPI,
  });

  console.log(isPending);

  return { resetGame, isPending };
}

export default useResetGame;
