import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGame as createGameAPI } from "../service/supabase";
import { useStore } from "../contexts/store";

function useCreateGame() {
  const { gameId } = useStore();
  const queryClient = useQueryClient();

  const { mutateAsync: createGame, isPending } = useMutation({
    mutationFn: createGameAPI,
    onSuccess: () => {
      console.log(gameId);
      queryClient.refetchQueries({ queryKey: ["game", gameId] });
    },
  });

  return { createGame, isPending };
}

export default useCreateGame;
