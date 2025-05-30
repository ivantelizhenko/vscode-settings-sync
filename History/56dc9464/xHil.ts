import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGame as createGameAPI } from "../service/supabase";
import { useStore } from "../contexts/store";

function useCreateGame() {
  const queryClient = useQueryClient();
  const { gameId } = useStore();

  const { mutateAsync: createGame, isPending } = useMutation({
    mutationFn: createGameAPI,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["game", gameId] });
    },
  });

  return { createGame, isPending };
}

export default useCreateGame;
