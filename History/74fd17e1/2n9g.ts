import { useMutation } from "@tanstack/react-query";
import { createGame as createGameAPI } from "../service/supabase";

function useCreateGame() {
  const { mutateAsync: setUserId } = useMutation({
    mutationFn: createGameAPI,
  });

  return { createGame };
}

export default useCreateGame;
