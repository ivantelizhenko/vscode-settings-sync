import { useMutation } from "@tanstack/react-query";
import { createGame as createGameAPI } from "../service/supabase";

function useCreateGame() {
  const { mutateAsync: createGame } = useMutation({
    mutationFn: createGameAPI,
    onSuccess: () => {},
  });

  return { createGame };
}

export default useCreateGame;
